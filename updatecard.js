document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('updateForm');
    // Function to parse URL parameters and pre-fill form fields
    function parseURLParams() {
        const queryString = window.location.search.substring(1);
        console.log("Query String:", queryString);
        const params = queryString.split('&');
        console.log("Params:", params);
        const record = {};
        params.forEach(param => {
            const pair = param.split('=');
            console.log("Pair:", pair);
            record[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });
        console.log("Record:", record);
        return record;
    }
    

    // Pre-fill form fields with record details
    const record = parseURLParams();
    console.log("Parameters parsed: ",record);
    document.getElementById('cardname').value = record.cardName || '';
    document.getElementById('carddesc').value = record.Description || ''; 
    document.getElementById('currentdate').value = record.Date || '';
    document.getElementById('currenttime').value = record.Time || '';
    document.getElementById('nearestplace').value = record.Place || '';
    document.getElementById('eventname').value = record.event || '';
    document.getElementById('imageInput').value = record.Image || '';
    // Pre-fill other form fields similarly

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const cardName = form.elements['cardname'].value;
        const cardDescription = form.elements['carddescription'].value;
        const currentDate = form.elements['currentdate'].value;
        const currentTime = form.elements['currenttime'].value;
        const nearestPlace = form.elements['nearestplace'].value;
        const eventName = form.elements['eventname'].value;
        const ImageInput = form.elements['imageInput'].value;
        const cardData = {
            cardName: cardName,
            Description: cardDescription,
            Date: currentDate,
            Time: currentTime,
            Place: nearestPlace,
            event: eventName,
            Image: ImageInput
          };
        // Code to update the record in localStorage and display success message
        updateRecord(cardData);
        displayMessage("Card updated successfully!");
    });
});
function updateRecord(updatedRecord) {
    console.log("Updated Record:", updatedRecord);
    // Retrieve the cardDataArray from localStorage
    let cardDataArray = JSON.parse(localStorage.getItem('cardData')) || [];
    // Find the index of the record to update
    const index = cardDataArray.findIndex(card => card.cardName === updatedRecord.cardName);
    // Update the record if found
    if (index !== -1) {
        cardDataArray[index] = updatedRecord;
        // Save the updated cardDataArray back to localStorage
        localStorage.setItem('cardData', JSON.stringify(cardDataArray));
    }
}
// Function to display success message
function displayMessage(message) {
    // Your code to display the message
    alert(message);
}
