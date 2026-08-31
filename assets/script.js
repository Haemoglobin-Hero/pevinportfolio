const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const page=document.body.dataset.page;
$$('.nav a').forEach(a=>{if(a.getAttribute('href')===page==='home'?'index.html':page+'.html')a.classList.add('active')});
const toggle=$('.menu-toggle'),nav=$('.nav'); if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12}); $$('.reveal').forEach(e=>observer.observe(e));
let mx=0,my=0,dx=0,dy=0;const dot=$('.cursor-dot'),ring=$('.cursor-ring');
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(dot){dot.style.left=mx+'px';dot.style.top=my+'px'}});(function loop(){dx+=(mx-dx)*.16;dy+=(my-dy)*.16;if(ring){ring.style.left=dx+'px';ring.style.top=dy+'px'}requestAnimationFrame(loop)})();
$$('a,button,.work-card,.feature-card').forEach(el=>{el.addEventListener('mouseenter',()=>document.body.classList.add('hovering'));el.addEventListener('mouseleave',()=>document.body.classList.remove('hovering'))});
$$('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')});
