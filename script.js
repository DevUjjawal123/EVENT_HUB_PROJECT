document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.querySelector(".event-list");

    // Example data (replace with actual event data)
    const events = [
        { title: "Tech Conference 2024 - AI", date: "August 15, 2024", location: "New York City", image: "ev1.jpg", detailsPage: "event1.html" },
        { title: "Tech Conference 2024 - Web Development", date: "September 5, 2024", location: "San Francisco", image: "ev2.jpg", detailsPage: "event2.html" },
        { title: "Art Exhibition", date: "September 10, 2024", location: "London", image: "ev3.jpg", detailsPage: "event3.html" },
        { title: "Music Festival 2024", date: "October 20-22, 2024", location: "Los Angeles", image: "ev4.jpg", detailsPage: "event4.html" }
    ];

    events.forEach(event => {
        // Create the event card container
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        // Create image element
        const eventImage = document.createElement("img");
        eventImage.classList.add("event-img");
        eventImage.src = event.image;
        eventImage.alt = `${event.title} Image`;

        // Create event info container
        const eventInfo = document.createElement("div");
        eventInfo.classList.add("event-info");

        // Create event title
        const eventTitle = document.createElement("h3");
        eventTitle.textContent = event.title;

        // Create event date
        const eventDate = document.createElement("p");
        eventDate.classList.add("event-date");
        eventDate.textContent = event.date;

        // Create event location
        const eventLocation = document.createElement("p");
        eventLocation.classList.add("event-location");
        eventLocation.textContent = event.location;

        // Create event description (short description for the preview)
        const eventDescription = document.createElement("p");
        eventDescription
