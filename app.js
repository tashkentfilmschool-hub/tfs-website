const header=document.querySelector('.site-header');
if(header && !header.classList.contains('light-header')) window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));
const btn=document.querySelector('.menu-button'), menu=document.querySelector('.mobile-menu');
if(btn&&menu){btn.addEventListener('click',()=>{menu.classList.toggle('open');btn.textContent=menu.classList.contains('open')?'×':'☰'});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');btn.textContent='☰'}));}
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('on')),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
