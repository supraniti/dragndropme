fetch('/UI-Templates/controllers.html')
.then(function (response) {
  return response.text();
})
.then(function (html) {
  console.log(`html = ${html}`);
  //console.log(text);
});
