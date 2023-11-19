const locations = {
  pr: {
    src: "https://paddlepicturedrocks.com/wp-content/uploads/2022/05/Paddling-Through-Lovers-Leap.webp",
    alt: "Pictures Rocks National Lakeshore",
  },
  ys: {
    src: "https://cdn.outsideonline.com/wp-content/uploads/2019/10/23/geyser-yelowstone-burst_h.jpg",
    alt: "Yellowstone National Park",
  },
  sq: {
    src: "https://explorewithalec.com/wp-content/uploads/2021/08/sequioa--scaled.jpg",
    alt: "Sequoia National Park",
  },
  ac: {
    src: "https://i0.wp.com/www.thefatgirlhiking.com/wp-content/uploads/2022/07/Ocena-Path-Cliffs.jpg?fit=1024%2C1024&ssl=1",
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
