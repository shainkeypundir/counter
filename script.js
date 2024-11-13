let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

console.log(btns); // it is basically returning a node of all the three buttons

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList; // it is just returning me the class of the clicked button.

    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


