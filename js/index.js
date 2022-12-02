const input = document.getElementById("practice");
const output = document.getElementById("txt-output");

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
