// window.addEventListener("load", function () {
//   var map = L.map("map").setView([28.6139, 77.209], 13);

//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     maxZoom: 19,
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);

//   L.marker([28.6139, 77.209])
//     .addTo(map)
//     .bindPopup("Connaught Place, Delhi")
//     .openPopup();
// });

window.addEventListener("load", function () {
  const location = listingLocation; // your dynamic listing location

  fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      location
    )}&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        alert("Could not find location: " + location);
        return;
      }

      const lat = data[0].lat;
      const lon = data[0].lon;

      const map = L.map("map").setView([lat, lon], 14);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }).addTo(map);

      L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<b>${listingTitle}</b><br>${listingLocation}`)
        .openPopup();
    })
    .catch((err) => {
      console.error("Geocoding failed:", err);
      alert("Geocoding failed. Try again later.");
    });
});
