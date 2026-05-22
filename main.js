// const map = L.map("map").setView([19.9975, 73.7898], 13); nashik

// var map = L.map("map").setView([51.505, -0.09], 13); london

const map = L.map("map").setView([19.9975, 73.7898], 13);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

// const tileUrl = "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png";

// const tileUrl = "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png ";

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ❤';

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(map);

const icon = L.icon({
  iconUrl: "buddha.png",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const buddhamarker = L.marker([19.944523, 73.748313], {
  icon: icon,
});

buddhamarker.addTo(map);
buddhamarker.bindPopup("<h1>buddha vihar</h1>");

const icon1 = L.icon({
  iconUrl: "jail.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const jailmarker = L.marker([19.96807, 73.8446], {
  icon: icon1,
});

jailmarker.addTo(map);
jailmarker.bindPopup("<h1>Nashik Centrel Center jail</h1>");

const icon2 = L.icon({
  iconUrl: "V-tech.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const WNSmarker = L.marker([19.974406451762537, 73.79087264232814], {
  icon: icon2,
});

WNSmarker.addTo(map);
WNSmarker.bindPopup("<h1>WNS V-Tech, Prem Office</h1>");

const icon3 = L.icon({
  iconUrl: "home.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const honemarker = L.marker([19.951878118897582, 73.84788343738292], {
  icon: icon3,
});

honemarker.addTo(map);
honemarker.bindPopup("<h1>Home Sweet Home</h1>");

// ----------------------------------

const icon4 = L.icon({
  iconUrl: "priyaWNS.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const priyaWNSmarker = L.marker([19.999368155235096, 73.7681969269844], {
  icon: icon4,
});

priyaWNSmarker.addTo(map);
priyaWNSmarker.bindPopup("<h1>Priya Office WNS</h1>");

// ----------------------------------

const icon5 = L.icon({
  iconUrl: "taiOffice.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const TaiOfficemarker = L.marker([20.01271250100521, 73.79421584417966], {
  icon: icon5,
});

TaiOfficemarker.addTo(map);
TaiOfficemarker.bindPopup("<h1>Tai Office - MahaProperty</h1>");

// ----------------------------------

const icon6 = L.icon({
  iconUrl: "kalaramMandir.svg",
  // iconSize: [80, 60],
  iconSize: [40, 30],
});

const kalaramMandirmarker = L.marker([20.007141620328944, 73.7951966134922], {
  icon: icon6,
});

kalaramMandirmarker.addTo(map);
kalaramMandirmarker.bindPopup("<h1>Kalaram Mandir - Jay Shree Ram</h1>");

// ----------------------------------

const icon7 = L.icon({
  iconUrl: "NashikRoadRailWayStation.svg",
  iconSize: [80, 60],
  // iconSize: [40, 30],
});

const Railwaymarker = L.marker([19.94836534697497, 73.84205957116409], {
  icon: icon7,
});

Railwaymarker.addTo(map);
Railwaymarker.bindPopup("<h1>Nashik Road - Railway Station</h1>");
