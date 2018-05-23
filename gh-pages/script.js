fetch('/UI-Templates/controllers.html')
.then(function (response) {
  return response.text();
})
.then(function (text) {
  console.log(text);
});
