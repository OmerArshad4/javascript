const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const body = document.querySelector("body");
const heading = document.querySelector("h1");
buttons.forEach((item) => {
  console.log(item);
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "red":
        body.style.backgroundColor = e.target.id;
        heading.style.color = e.target.id;
        heading.style.backgroundColor = "#212121";
        heading.style.padding = "20px";
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        heading.style.color = e.target.id;
        heading.style.backgroundColor = "#212121";
        heading.style.padding = "20px";
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        heading.style.color = e.target.id;
        heading.style.backgroundColor = "#212121";
        heading.style.padding = "20px";
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        heading.style.color = e.target.id;
        heading.style.backgroundColor = "#212121";
        heading.style.padding = "20px";
        break;

      default:
        break;
    }
  });
});
