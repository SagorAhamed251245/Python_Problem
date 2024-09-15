var fist_input = document.getElementById("fist_input");
var sec_input = document.getElementById("sec_input");
var calculated = document.getElementById("calculated");
var result = document.getElementById("result");
var method = document.getElementById("method");

calculated.addEventListener("click", function () {
  console.log(method.value);

  if (method.value === "add") {
    var add = parseInt(fist_input.value) + parseInt(sec_input.value);
    result.innerText = add;
  } else {
    var add = parseInt(fist_input.value) - parseInt(sec_input.value);
    result.innerText = add;
  }

  //   console.log(add);
});
