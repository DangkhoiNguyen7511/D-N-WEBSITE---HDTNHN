const menu=document.querySelector('#menu'),nav=document.querySelector('nav'),header=document.querySelector('header'),loader=document.querySelector('#loader');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),450));
window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',scrollY>40);
  const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('nav a')];
  let current='gioi-thieu'; sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const box=document.querySelector('.particles');
if(box)for(let i=0;i<35;i++){const p=document.createElement('i');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=(50+Math.random()*50)+'%';p.style.animationDelay=Math.random()*8+'s';p.style.animationDuration=(5+Math.random()*8)+'s';box.appendChild(p)}
document.querySelectorAll('.magnetic').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{if(matchMedia('(max-width:750px)').matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-8px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
const dot=document.querySelector('.cursor-dot'),ring=document.querySelector('.cursor-ring');
window.addEventListener('mousemove',e=>{if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}if(ring){ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px'}});
document.querySelectorAll('a,button,.info-card,.activity-card').forEach(el=>{el.addEventListener('mouseenter',()=>{if(ring){ring.style.width='52px';ring.style.height='52px'}});el.addEventListener('mouseleave',()=>{if(ring){ring.style.width='34px';ring.style.height='34px'}})});
