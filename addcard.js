//get data from the form
let cardDataArray = JSON.parse(localStorage.getItem('cardData')) || [];
const form = document.querySelector('form');
form.addEventListener('submit',function(event) {
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
    cardDataArray.push(cardData);
    localStorage.setItem('cardData', JSON.stringify(cardDataArray));
    form.reset();
    displayMessage("Card added successfully!");
});

function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = 'message';

    form.insertAdjacentElement('afterend', messageDiv);

    setTimeout(function() {
        messageDiv.remove();
    }, 3000);
}