const lon = document.querySelector("#lon").innerHTML
const lat = document.querySelector("#lat").innerHTML

console.log(`${lon}, ${lat}`)
var map = L.map('map').setView([lon, lat], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

var marker = L.marker([lon,lat]).addTo(map);