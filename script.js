
const nav=document.querySelector('#nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>20));
document.querySelector('#year')?.append(new Date().getFullYear());
const menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links?.classList.toggle('open'));

window.addEventListener('load',()=>document.querySelector('.page-loader')?.classList.add('hide'));

const cursor=document.querySelector('.cursor');
if(cursor){window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.tile,.project,.filter').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('grow'));el.addEventListener('mouseleave',()=>cursor.classList.remove('grow'))})}

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-page]').forEach(a=>a.addEventListener('click',e=>{
  const href=a.getAttribute('href'); if(href && !href.startsWith('#')){e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=href,180)}
}));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  document.querySelectorAll('.tile').forEach(tile=>{tile.style.display=filter==='all'||tile.dataset.category===filter?'block':'none'})
}));

const modal=document.querySelector('.modal');
document.querySelectorAll('.tile[data-modal]').forEach(tile=>tile.addEventListener('click',()=>{
  if(!modal)return;
  const img=modal.querySelector('img'), title=modal.querySelector('[data-modal-title]'), copy=modal.querySelector('[data-modal-copy]');
  img.src=tile.dataset.image; title.textContent=tile.dataset.title; copy.textContent=tile.dataset.copy; modal.classList.add('open'); document.body.style.overflow='hidden';
}));
modal?.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.close')){modal.classList.remove('open');document.body.style.overflow=''}})
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.classList.contains('open')){modal.classList.remove('open');document.body.style.overflow=''}})
