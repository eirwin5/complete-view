const locations = {
  pr: {
    src: "../images/pictured_rocks_profile.webp",
    alt: "Pictures Rocks National Lakeshore",
  },
  ys: {
    src: "../images/yellowstone_sulphur_springs.JPG",
    alt: "Yellowstone National Park",
  },
  sq: {
    src: "../images/sequoia_national_park.jpg",
    alt: "Sequoia National Park",
  },
  ac: {
    src: "../images/acadia-prof.webp",
    alt: "Acadia National Park",
  },
};

// removes all previous sections and shows the selected one
function show(id) { 
  document.querySelectorAll("section").forEach((e) => { e.style.display = "none"; })
  document.getElementById(id).style.display = "contents";
}

// updates the background img of the display div
function update(id) {
  var display = document.getElementById("display");
  console.log(display);

  const src = locations[id].src;
  const alt = locations[id].alt;

  // set the alt text and background images when hovered
  display.textContent = "";
  display.style.backgroundImage = "url('" + src + "')";

  document.getElementById("pin-name").textContent = alt;
}

function reset(id) {
  var display = document.getElementById("display");

  // set the background image and alt text back
  display.textContent =
    "Hover over an pin on the map below.";
  display.style.backgroundImage = "url()";
    document.getElementById("pin-name").textContent = "";

}
