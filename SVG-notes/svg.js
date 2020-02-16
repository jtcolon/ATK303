window.onload = function () {
  var s = Snap("#svgout"); // ID where SVG loads in page

  // load SVG and do stuff to it
  Snap.load("SVGLogo.svg", function (logo) {
    s.append(logo); // append SVG to #svgout
  });
}
