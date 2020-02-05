function shekilSlide() {
  let elements = document.querySelectorAll("#container img");
  let axirinciShekil = elements[elements.length - 1];

  axirinciShekil.classList.add("fadeOut");
  console.log(axirinciShekil.parentNode);

  setTimeout(function() {
    axirinciShekil.parentNode.insertBefore(axirinciShekil, elements[0]);
    axirinciShekil.classList.remove("fadeOut");
  }, 1500);
}

setInterval(() => {
  shekilSlide();
}, 5000);
