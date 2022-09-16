(function(){
  var btn = document.querySelector('.btn');
  var btnTop = btn.offsetTop;
  var btnLeft = btn.offsetLeft;
  btn.addEventListener('click',function(e){
    var div = document.createElement('div');
    div.classList.add('wave');
    div.style.left = e.clientX - btnLeft - 3 + 'px';
    div.style.top = e.clientY - btnTop - 3 + 'px';
    btn.appendChild(div);
    setTimeout(function(){
      div.classList.add('wave-ani');
    });
    setTimeout(function(){
      btn.removeChild(div);
    },1500);
  });
  btn.addEventListener('mousedown',function(){
    btn.classList.add('btn-active');
  });
  btn.addEventListener('mousedown',function(){
    btn.classList.remove('btn-active');
  });
})();
