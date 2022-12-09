const input = document.getElementById("practice");
const output = document.getElementById("txt-output");
const header = document.querySelector("header");

input.addEventListener("keyup", (event) => {
  event.preventDefault();

  if (event.key === "Enter") {
    const para = document.createElement("p");
    const txtNd = document.createTextNode(input.value);
    const btn = document.createElement("button");
    btn.textContent = "delete";
    para.appendChild(txtNd);
    output.appendChild(para);
    output.appendChild(btn);
    btn.addEventListener("click", () => {
      output.removeChild(para);
      output.removeChild(btn);
    });
  }
});

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");
const p9 = document.getElementById("p9");
const p10 = document.getElementById("p10");

p1.addEventListener("click", change1);
p2.addEventListener("click", change2);
p3.addEventListener("click", change3);
p4.addEventListener("click", change4);
p5.addEventListener("click", change5);
p6.addEventListener("click", change6);
p7.addEventListener("click", change7);
p8.addEventListener("click", change8);
p9.addEventListener("click", change9);
p10.addEventListener("click", change10);

function backGround() {
  header.style.backgroundSize = "content";
  header.style.backgroundRepeat = "no-repeat";
  header.style.backgroundPosition = "center";
  header.style.backgroundAttachment = "fixed";
}

function change1() {
  header.style.background = "url('../img/pic1.jpg')";
  backGround();
}
function change2() {
  header.style.background = "url('../img/pic2.jpg')";
  backGround();
}
function change3() {
  header.style.background = "url('../img/pic3.jpg')";
  backGround();
}
function change4() {
  header.style.background = "url('../img/pic4.jpg')";
  backGround();
}
function change5() {
  header.style.background = "url('../img/pic5.jpg')";
  backGround();
}
function change6() {
  header.style.background = "url('../img/pic6.jpg')";
  backGround();
}
function change7() {
  header.style.background = "url('../img/pic7.jpg')";
  backGround();
}
function change8() {
  header.style.background = "url('../img/pic8.jpg')";
  backGround();
}
function change9() {
  header.style.background = "url('../img/pic9.jpg')";
  backGround();
}
function change10() {
  header.style.background = "url('../img/pic10.jpg')";
  backGround();
}

//Parallax script effect

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px;";
});
