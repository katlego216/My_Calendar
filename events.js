document.addEventListener("DOMContentLoaded", function() {
    //This starts an event listener that waits for the HTML document to be completely loaded and parsed.
    const eventsList = document.getElementById("events-list");
    const clearButton = document.getElementById("clear-events");

    // Function to display events.
    function displayEvents() {
        // Retrieve the events array from localStorage.
        var eventInStorage = localStorage.getItem('events');
        console.log("eventInStorage:", eventInStorage);
        let events = JSON.parse(eventInStorage) || [];
        console.log("events:", events);

        // Clear previous content
        eventsList.innerHTML = '';

        // Display the events
        events.forEach(event => {
            let eventItem = document.createElement("div");
            eventItem.classList.add("event-item");
            eventItem.innerHTML = `
                <h2>${event.title}</h2>
                <p>${event.description}</p>
            `;
            eventsList.appendChild(eventItem);
        });
        //: Iterates over each event object in the events array using forEach(). For each event, 
        //it creates a new <div> element (eventItem) and assigns it a class "event-item".

        // Toggle visibility of clear button.
        if (events.length > 0) {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
    }

    // Initial display of events
    displayEvents();
    // Calls the displayEvents() function immediately after the HTML document is fully loaded.

    // Clear events button click event
    clearButton.addEventListener('click', function() {
        localStorage.removeItem('events'); // Clear events from localStorage
        displayEvents(); // Refresh display
    });
});

