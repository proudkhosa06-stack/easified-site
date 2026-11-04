import { chromium } from 'playwright';
const url=process.argv[2]||'http://localhost:8080/';
const b=await chromium.launch();
for(const [n,w,h] of [['390',390,844],['1280',1280,800]]){
  const c=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:n==='390'?2:1});
  const p=await c.newPage(); await p.goto(url,{waitUntil:'networkidle'});
  await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120))}window.scrollTo(0,0)});
  await p.waitForTimeout(800);
  await p.screenshot({path:`shots/full-${n}.png`,fullPage:true});
  await p.screenshot({path:`shots/fold-${n}.png`});
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth);console.log(n,'scrollWidth',sw);
  await c.close();
}
await b.close();
