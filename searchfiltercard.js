
let cardDataArray = JSON.parse(localStorage.getItem('cardData')) || [];

function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.textContent = 'No results found.';
        return;
    }

    const table = document.createElement('table');
    table.classList.add('search-results-table');

    const headerRow = table.insertRow();
    for (const key in results[0]) {
        if (results[0].hasOwnProperty(key)) {
            const th = document.createElement('th');
            th.textContent = key.toUpperCase();
            headerRow.appendChild(th);
        }
        
    }
    const th = document.createElement('th');
    th.textContent = "update";
    headerRow.appendChild(th);

    results.forEach(card => {
        const row = table.insertRow();
        for (const key in card) {
            if (card.hasOwnProperty(key)) {
                const cell = row.insertCell();
                cell.textContent = card[key];
            }
        }
        const cell = row.insertCell();
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function() {
            localStorage.setItem('updateCard', JSON.stringify(card));
            console.log("Parameters:", card);
            const queryString = Object.keys(card).map(key => key + '=' + encodeURIComponent(card[key])).join('&');
            window.location.href = 'updatecard.html?' + queryString;
        });
        cell.appendChild(updateButton);
        
    });
    searchResultsDiv.appendChild(table);
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const filterBy = document.getElementById('filter').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();

    let results = [];

    if (filterBy === 'cardname') {
        results = cardDataArray.filter(card => card.cardName.toLowerCase().includes(searchTerm));
    } else if (filterBy === 'date') {
        results = cardDataArray.filter(card => card.Date.toLowerCase().includes(searchTerm));
    } else if (filterBy === 'time') {
        results = cardDataArray.filter(card => card.Time.toLowerCase().includes(searchTerm));
    } else if (filterBy === 'event') {
        results = cardDataArray.filter(card => card.event.toLowerCase().includes(searchTerm));
    } else if (filterBy === 'nearestplace') {
        results = cardDataArray.filter(card => card.Place.toLowerCase().includes(searchTerm));
    }

    displaySearchResults(results);
});

