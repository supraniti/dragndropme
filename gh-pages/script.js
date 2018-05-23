
function fetchUI(){
  fetch('/UI-Templates/controllers.html')
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    return document.createRange().createContextualFragment(html);
  });
  return false;
}
let test = document.getElementById('testUI');
test.onclick = function(){
  console.log( fetchUI() );
}
