console.log("script.js is loaded");

let events = JSON.parse(localStorage.getItem('events')) || [];
let eventTitleInput = document.getElementById("eventTitle");
let eventDescriptionInput = document.getElementById("eventDescription");
let eventIdCounter = events.length ? Math.max(...events.map(event => event.id)) + 1 : 1;

function addEvent() {
    console.log("addEvent function called");

    let title = eventTitleInput.value;
    let description = eventDescriptionInput.value;

    if (title) {
        let eventId = eventIdCounter++;
        events.push({ id: eventId, title: title, description: description });
        console.log(events);

        // Save the events array to localStorage
        localStorage.setItem('events', JSON.stringify(events));

        // Open the new page
        window.open('events.html', '_blank');
    }
}

