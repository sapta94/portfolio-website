const header=document.getElementById('header');const nav=document.getElementById('nav');const menu=document.getElementById('menu');const top=document.getElementById('top');
menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'×':'☰'});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>20);top.classList.toggle('show',scrollY>600)});
top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal,.timeline-row,.project,.principle-grid>div').forEach(e=>observer.observe(e));
