
function fetchUI(UI){
  fetch('/UI-Templates/controllers.html')
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    UI = document.createRange().createContextualFragment(html);
    console.log(UI);
  });
}
let test = document.getElementById('testUI');
let UI = {};
test.onclick = function(){
  fetchUI(UI);
}
