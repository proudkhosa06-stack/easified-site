(function(){
  var d=document;d.documentElement.classList.add('js');
  var b=d.querySelector('.burger'),m=d.getElementById('menu');
  b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    d.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});
  } else d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
  var lb=d.getElementById('lb'),li=lb.querySelector('img');
  d.querySelectorAll('.shot').forEach(function(s){s.addEventListener('click',function(){li.src=s.dataset.src;li.alt=s.querySelector('img').alt;lb.hidden=false;d.body.style.overflow='hidden'})});
  function close(){lb.hidden=true;d.body.style.overflow=''}
  lb.addEventListener('click',close);d.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();
