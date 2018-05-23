
function fetchUI(){
  let UI = document.createDocumentFragment();
  fetch('/UI-Templates/controllers.html')
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    UI.innerHTML = html;
    //console.log(text);
  });
  return UI;
}
let test = document.getElementById('testUI');
test.onclick = function(){
  console.log( fetchUI() );
}
