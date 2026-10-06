const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const loader=$('#loader'),header=$('#header'),menu=$('#menu'),nav=$('nav');
window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),700));
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
$$('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.14});
$$('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i*70,350)+'ms';revealObserver.observe(el)});

const sections=$$('section[id]');
const navLinks=$$('nav a');
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>sectionObserver.observe(s));

function onScroll(){header.classList.toggle('scrolled',scrollY>35)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();

const particleBox=$('.particles');
for(let i=0;i<22;i++){const p=document.createElement('i');p.className='particle';p.style.left=Math.random()*100+'%';p.style.top=80+Math.random()*30+'%';p.style.animationDuration=8+Math.random()*12+'s';p.style.animationDelay=Math.random()*8+'s';particleBox.appendChild(p)}

$$('.stat strong').forEach(el=>{const target=el.dataset.count;const n=parseInt(target,10);const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){let start=0;const t0=performance.now();function tick(t){const p=Math.min((t-t0)/700,1);const v=Math.floor(p*n);el.textContent=String(v).padStart(2,'0');if(p<1)requestAnimationFrame(tick);else el.textContent=target}requestAnimationFrame(tick);obs.unobserve(el)}}),{threshold:.7});obs.observe(el)});

$$('.magnetic').forEach(btn=>btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`}));
$$('.magnetic').forEach(btn=>btn.addEventListener('mouseleave',()=>btn.style.transform=''));
$$('.tilt').forEach(card=>card.addEventListener('mousemove',e=>{if(innerWidth<801)return;const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-5px)`}));
$$('.tilt').forEach(card=>card.addEventListener('mouseleave',()=>card.style.transform=''));

const dot=$('.cursor-dot'),ring=$('.cursor-ring');
if(matchMedia('(pointer:fine)').matches){let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.opacity=1;ring.style.opacity=1});function cursor(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;dot.style.left=mx+'px';dot.style.top=my+'px';ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(cursor)}cursor();$$('a,button,.tilt').forEach(el=>{el.addEventListener('mouseenter',()=>ring.classList.add('hover'));el.addEventListener('mouseleave',()=>ring.classList.remove('hover'))})}

document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const ripple=document.createElement('span');ripple.className='ripple';b.appendChild(ripple);setTimeout(()=>ripple.remove(),600)});
