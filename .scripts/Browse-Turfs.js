// Search Turfs Function
function searchTurfs() {
    let location = document.getElementById("location").value;
    let players = document.getElementById("players").value;
    let playDate = document.getElementById("playDate").value;
    let query = document.getElementById("searchQuery").value;

    alert(`Searching for turfs in ${location} for ${players} players on ${playDate}. Search query: ${query}`);
    // You can integrate backend APIs here for actual search results
}

// Open Turf Detail
function openTurfDetail(url) {
    window.location.href = url;
}
// Search Turfs Function with Area Filter
function searchTurfs() {
    let location = document.getElementById("location").value;  // This is the overall location (e.g., Vadodara)
    let area = document.getElementById("area").value;  // This is the specific area (e.g., Channi)
    let players = document.getElementById("players").value;
    let playDate = document.getElementById("playDate").value;
    let query = document.getElementById("searchQuery").value;

    // Example Output (Here you'd integrate actual search/filter logic with a backend or local data)
    alert(`Searching for turfs in ${area}, ${location} for ${players} players on ${playDate}. Search query: ${query}`);

    // You would apply filtering logic here based on the selected area
    // For example, if you're using an array of turf objects:
    /*
    let turfs = [
        { name: "Harmony Turf", area: "channi", price: 50 },
        { name: "Radiant Turf", area: "bhaili", price: 40 },
        { name: "Tranquil Turf", area: "manjalpur", price: 35 }
    ];
    
    let filteredTurfs = turfs.filter(turf => turf.area === area);
    
    // Then, display these filtered turfs dynamically in the turf grid
    displayTurfs(filteredTurfs);
    */
}

// Function to dynamically display the filtered turfs (you can modify as per your requirements)
function displayTurfs(turfs) {
    const turfResults = document.getElementById("turfResults");
    turfResults.innerHTML = '';  // Clear existing turfs
    
    turfs.forEach(turf => {
        const turfBlock = document.createElement("div");
        turfBlock.classList.add("turf-block");
        turfBlock.innerHTML = `
            <img src="turf-placeholder.jpg" alt="${turf.name}">
            <h3>${turf.name}</h3>
            <p>Price: $${turf.price}/hour</p>
        `;
        turfResults.appendChild(turfBlock);
    });




}