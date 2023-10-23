const $btn = document.getElementById("btn");

$btn.style.backgroundColor = "blue";

$btn.addEventListener("mouseenter", function () {
  console.log("enter");
  $btn.style.backgroundColor = "red";
});

$btn.addEventListener("mouseleave", function () {
  console.log("leave");
  $btn.style.backgroundColor = "blue";
});
