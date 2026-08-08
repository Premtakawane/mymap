const nashik = [19.9975, 73.7898];
const map = L.map("map").setView(nashik, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const locations = [
  { name: "Buddha Vihar", coordinates: [19.944523, 73.748313], category: "spiritual", icon: "buddha.png", size: [80, 60] },
  { name: "Nashik Central Jail", coordinates: [19.96807, 73.8446], category: "landmark", icon: "jail.svg", size: [80, 60] },
  { name: "WNS V-Tech", coordinates: [19.974406451762537, 73.79087264232814], category: "office", icon: "V-tech.svg", size: [80, 60] },
  { name: "Priya Office — WNS", coordinates: [19.999368155235096, 73.7681969269844], category: "office", icon: "priyaWNS.svg", size: [80, 60] },
  { name: "Tai Office — MahaProperty", coordinates: [20.01271250100521, 73.79421584417966], category: "office", icon: "taiOffice.svg", size: [80, 60] },
  { name: "Kalaram Mandir", coordinates: [20.007141620328944, 73.7951966134922], category: "spiritual", icon: "kalaramMandir.svg", size: [40, 30] },
  { name: "Nashik Road Railway Station", coordinates: [19.94836534697497, 73.84205957116409], category: "travel", icon: "NashikRoadRailWayStation.svg", size: [80, 60] },
];

const markerLayer = L.layerGroup().addTo(map);

function showLocations(category = "all") {
  markerLayer.clearLayers();

  locations
    .filter((location) => category === "all" || location.category === category)
    .forEach((location) => {
      const icon = L.icon({
        iconUrl: `assets/images/${location.icon}`,
        iconSize: location.size,
      });

      L.marker(location.coordinates, { icon })
        .bindPopup(`<strong>${location.name}</strong>`)
        .addTo(markerLayer);
    });
}

showLocations();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active").classList.remove("active");
    button.classList.add("active");
    showLocations(button.dataset.category);
  });
});

const locateButton = document.querySelector("#locate-me");
const locationStatus = document.querySelector("#location-status");
let userLocationLayer;

locateButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Location is not available in this browser.";
    return;
  }

  locateButton.disabled = true;
  locateButton.textContent = "Finding your location…";
  locationStatus.textContent = "Please allow location access if your browser asks.";

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const position = [coords.latitude, coords.longitude];

      if (userLocationLayer) map.removeLayer(userLocationLayer);

      userLocationLayer = L.layerGroup([
        L.circle(position, { radius: coords.accuracy, color: "#176b45", fillOpacity: 0.15 }),
        L.circleMarker(position, { radius: 8, color: "#fff", fillColor: "#176b45", fillOpacity: 1, weight: 3 }).bindPopup("You are here"),
      ]).addTo(map);

      map.setView(position, 16);
      locationStatus.textContent = "Your location is shown on the map.";
      locateButton.disabled = false;
      locateButton.textContent = "Update my location";
    },
    () => {
      locationStatus.textContent = "Location was not shared. You can still explore the map.";
      locateButton.disabled = false;
      locateButton.textContent = "Locate me";
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
  );
});
