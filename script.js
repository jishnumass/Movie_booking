const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const movieTrailer = document.getElementById('movie-trailer');

let ticketPrice = +movieSelect.value;

// Update selected seat count and total
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();

    // Update the video source based on the selected movie
    const selectedTrailer = e.target.options[e.target.selectedIndex].getAttribute('data-trailer');
    movieTrailer.src = selectedTrailer;
    movieTrailer.play(); // Start playing the new video
});

// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('sold')) {
            seat.classList.toggle('selected');
            updateSelectedCount();
        }
    });
});
