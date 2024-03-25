
let cardDataArray = JSON.parse(localStorage.getItem('cardData')) || [];

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search').value.toLowerCase();

    let results = [];
    results = cardDataArray.filter(card => card.cardName.toLowerCase().includes(searchTerm));
    
    if (results.length === 0) {
        alert('No such card exists.');
    } else {
        // Delete the record from cardDataArray
        cardDataArray = cardDataArray.filter(card => !card.cardName.toLowerCase().includes(searchTerm));
        // Save the updated cardDataArray back to localStorage
        localStorage.setItem('cardData', JSON.stringify(cardDataArray));
        // Notify the user
        alert('Card deleted successfully!');
    }
});
document.getElementById('submit2').addEventListener('click', function(event) {
    event.preventDefault();

    if (confirm("Are you sure you want to delete all cards?")) {
        // Clear the cardDataArray
        cardDataArray = [];
        // Clear the localStorage
        localStorage.removeItem('cardData');
        // Notify the user
        alert('All cards deleted successfully!');
    }
});


