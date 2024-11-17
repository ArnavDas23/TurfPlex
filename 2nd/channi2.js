$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


    // Modal functionality for booking slot
    const modal = $('#bookingModal');        // Get the modal element
    const bookButton = $('#bookButton');     // Button to trigger modal
    const closeButton = $('.close-button');  // Close button inside the modal

    // Show the modal when "Book Your Slot" button is clicked
    bookButton.on('click', function() {
        modal.css('display', 'block');       // Display modal
    });

    // Close the modal when the close button is clicked
    closeButton.on('click', function() {
        modal.css('display', 'none');        // Hide modal
    });

    // Close modal if clicked outside the modal content
    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.css('display', 'none');    // Hide modal when clicking outside
        }
    });

    // Confirm booking on slot selection
    $('#confirmBooking').on('click', function() {
        const selectedSlot = $('input[name="slot"]:checked').val(); // Get selected slot
        if (selectedSlot) {
            alert(`Your booking for the slot ${selectedSlot} is confirmed!`); // Confirm booking
            modal.css('display', 'none');    // Hide modal after booking confirmation
        } else {
            alert('Please select a time slot.');  // Show alert if no slot is selected
        }
    });


// Initialize Google Map
function initMap() {
    // Replace these with your desired map coordinates and options
    var mapOptions = {
        zoom: 8,
        center: { lat: -25.363882, lng: 131.044922 } // Example coordinates (Alice Springs, Australia)
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add markers, directions, or other map features as needed
}
// function initMap() {
//     // Example coordinates of the turf (Replace with actual turf coordinates)
//     const turfLocation = { lat: 54.3072, lng: 54.1812 };  // Latitude and longitude (Vadodara example)
    
//     // Create a new map centered at the turf location
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 14,                    // Map zoom level
//         center: turfLocation          // Center map to turf location
//     });

    // Add a marker on the map for the turf location
    new google.maps.Marker({
        position: turfLocation,       // Marker position
        map: map,                     // Map where the marker is placed
        title: 'Turf Location'        // Tooltip text for the marker
    });

