const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll('.service-card,.work-placeholder,.about-grid,.contact-card').forEach(el=>{
  el.style.opacity='0';el.style.transform='translateY(24px)';el.style.transition='opacity .7s ease, transform .7s ease';observer.observe(el);
});
const style=document.createElement('style');
style.textContent='.visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
