let slideME = document.querySelector(".folders");
let slideBtn = document.querySelector(".color");

slideBtn.addEventListener("click", () => {
  console.log(slideME.innerHTML);

  if (
    slideME.classList.contains("hide") ||
    slideME.classList.contains("close")
  ) {
    console.log("hello");
    slideME.classList.remove("close");
    slideME.classList.remove("hide");
    slideME.classList.add("sliding");
  } else {
    slideME.classList.remove("sliding");
    slideME.classList.add("close");
  }
});
