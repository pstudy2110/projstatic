const ws = new WebSocket('wss://ideal-chainsaw.onrender.com/nav.js/home:8089');
const navResponses = document.querySelector(".nav-responses");
ws.addEventListener("open", (event) => {
    console.log("Connected to WebSocket server:", event);
});

ws.addEventListener("message", (event) => {
    console.log("Message received from server:", event.data);
    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.textContent = event.data;

    // Append the message to the chat log
    navResponses.appendChild(messageElement);

    // Scroll to the bottom of the chat log
    navResponses.scrollTop = navResponses.scrollHeight;
});

ws.addEventListener("close", (event) => {
    console.log("Disconnected from WebSocket server:", event);
});

ws.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
});


function navOn() { 
    document.querySelector(".nav-responses").classList.toggle("hidden");
}


function sendMessage() {
    const messageTextarea = document.getElementById("messageInput");
    const message = messageTextarea.value;
    ws.send(message);
    if (message) {
        messageTextarea.value = ""; // Clear the textarea
    } else {
        console.log("Please enter a message");
    }
    console.log("Message sent:", message);

}

