ScrollReveal().reveal(".home_social", {
  delay: 500,
  duration: 500,
  reset: true,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".education__container", {
  delay: 200,
  duration: 700,
  reset: true,
  origin: "bottom",
  distance: "200px",
});

ScrollReveal().reveal(".skill_content, .tool_content", {
//   delay: 200,
//   duration: 700,
  reset: true,
  rotate: {
    x: 20,
    z: 20,
  },
  interval: 200,
});
