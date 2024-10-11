// Initialize the map
const map = L.map('map').setView([20, 0], 2);

// Load and display tile layer on the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optionally add markers or other layers
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('A marker on London')
    .openPopup();
