window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('done'),2100));
 
// Cursor
const cur=document.getElementById('cur'),cdot=document.getElementById('cdot');
let mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cdot.style.left=mx+'px';cdot.style.top=my+'px'});
(function ani(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(ani)})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='52px';cur.style.height='52px';cur.style.opacity='1'});
  el.addEventListener('mouseleave',()=>{cur.style.width='36px';cur.style.height='36px';cur.style.opacity='.6'});
});
 
// Nav scroll
window.addEventListener('scroll',()=>document.getElementById('nb').classList.toggle('sc',scrollY>60));
 
// Mobile menu
const hbg=document.getElementById('hbg'),mnav=document.getElementById('mnav');
hbg.addEventListener('click',()=>{hbg.classList.toggle('op');mnav.classList.toggle('op')});
function cm(){hbg.classList.remove('op');mnav.classList.remove('op')}
 
// Theme
let dark=true;
document.getElementById('tbtn').addEventListener('click',()=>{
  dark=!dark;
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  document.getElementById('tbtn').textContent=dark?'🌙':'☀️';
});
 
// Typed text
const roles=['Full Stack Developer','UI/UX Designer','Software Engineer','React Specialist','Creative Coder'];
let ri=0,ci=0,del=false;
function type(){
  const el=document.getElementById('typed'),w=roles[ri];
  if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,1700);return}setTimeout(type,82)}
  else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length;setTimeout(type,320);return}setTimeout(type,42)}
}
setTimeout(type,2400);
 
// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('vis'),+(e.target.dataset.d||0))});
},{threshold:.1});
document.querySelectorAll('.rv,.rvl,.rvr').forEach((el,i)=>{el.dataset.d=(i%6)*70;obs.observe(el)});
 
// Form
function hs(e){
  e.preventDefault();
  const b=document.getElementById('sbtn');
  b.innerHTML='<span>Sending…</span>';b.disabled=true;
  setTimeout(()=>{document.getElementById('cform').style.display='none';document.getElementById('fsuc').classList.add('show')},1300);
}
