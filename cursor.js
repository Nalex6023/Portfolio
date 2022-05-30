const cursor = document.querySelector(".cursor-inner");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
const imgContainer = document.querySelector(".img-container");
const imgContainer2 = document.querySelector(".img-container2");
const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");
const hover = function (para, x, y) {
  para.addEventListener("mousemove", function () {
    cursor.classList.add(y);
    x.style.display = "block";
  });
  para.addEventListener("mouseleave", function () {
    cursor.classList.remove(y);
    x.style.display = "none";
  });
};

hover(imgContainer, cursor1, "hover2");
hover(imgContainer2, cursor1, "hover2");
hover(project1, cursor2, "hover2");
hover(project2, cursor2, "hover2");
