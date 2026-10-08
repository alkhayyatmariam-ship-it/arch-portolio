const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const source = fs.readFileSync('auth.js', 'utf8');
async function run({gated=true, configured=true, session=null, error=null, signupSession=null, loginError=null}={}) {
  const nodes = new Map();
  const node = (key) => {
    if (!nodes.has(key)) nodes.set(key,{hidden:key==='#portfolio',textContent:'',disabled:false,value:'',handlers:{},addEventListener(event,fn){this.handlers[event]=fn;},querySelectorAll(){return [];},reportValidity(){return true;},setAttribute(){}});
    return nodes.get(key);
  };
  const redirects=[];
  let listener;
  const logout=node('logout');
  const document={body:{hasAttribute:()=>gated},querySelector:(key)=>key==='#auth-form'&&gated?null:node(key),querySelectorAll:()=>[logout]};
  const window={PORTFOLIO_CONFIG:configured?{supabaseUrl:'https://example.supabase.co',supabasePublishableKey:'test-only'}:{},location:{protocol:'http:',href:'http://localhost/login.html',replace:url=>redirects.push(url),assign:url=>redirects.push(url)},supabase:{createClient:()=>({auth:{onAuthStateChange:fn=>listener=fn,getSession:async()=>({data:{session},error}),signOut:async()=>({error:null}),signUp:async()=>({data:{session:signupSession},error:null}),signInWithPassword:async()=>({data:{session:loginError?null:{}},error:loginError})}})}};
  vm.runInNewContext(source,{document,window,URL});
  await new Promise(resolve=>setImmediate(resolve));
  return {node,redirects,listener,logout};
}
(async()=>{
  let r=await run(); assert.deepEqual(r.redirects,['login.html']); assert.equal(r.node('#portfolio').hidden,true);
  r=await run({configured:false}); assert.deepEqual(r.redirects,['login.html']);
  r=await run({session:{}}); assert.equal(r.node('#portfolio').hidden,false); r.listener('SIGNED_OUT',null); assert.equal(r.node('#portfolio').hidden,true); assert.deepEqual(r.redirects,['login.html']);
  r=await run({session:{}}); await r.logout.handlers.click(); assert.equal(r.node('#portfolio').hidden,true); assert.deepEqual(r.redirects,['login.html']);
  r=await run({error:new Error('offline')}); assert.equal(r.node('#portfolio').hidden,true); assert.deepEqual(r.redirects,['login.html']);
  r=await run({gated:false,configured:false}); assert.match(r.node('#auth-status').textContent,/not configured/); let prevented=false; r.node('#auth-form').handlers.submit({preventDefault(){prevented=true;}}); assert.equal(prevented,true);
  r=await run({gated:false}); r.node('#signup-button').handlers.click(); await new Promise(resolve=>setImmediate(resolve)); assert.match(r.node('#auth-status').textContent,/Check your email/); assert.deepEqual(r.redirects,[]);
  r=await run({gated:false,signupSession:{}}); r.node('#signup-button').handlers.click(); await new Promise(resolve=>setImmediate(resolve)); assert.deepEqual(r.redirects,['index.html']);
  r=await run({gated:false}); r.node('#auth-form').handlers.submit({preventDefault(){}}); await new Promise(resolve=>setImmediate(resolve)); assert.deepEqual(r.redirects,['index.html']);
  r=await run({gated:false,loginError:new Error('Invalid login credentials')}); r.node('#auth-form').handlers.submit({preventDefault(){}}); await new Promise(resolve=>setImmediate(resolve)); assert.match(r.node('#auth-status').textContent,/Invalid login credentials/); assert.deepEqual(r.redirects,[]);
  r=await run({gated:false,session:{}}); assert.equal(r.node('#signed-in').hidden,false); assert.equal(r.node('#auth-form').hidden,true);
  console.log('PASS: signed-out/configuration/error gates, signed-in reveal, session loss, logout, safe form handling, confirmation signup.');
})().catch(error=>{console.error(error);process.exitCode=1;});
