// Function to send a message
const sendMessage = async (tab, phone, msg) => {
    const chatUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
    let retries = 0;
    const maxRetries = 5;

    // Navigate to the chat URL
    tab.location.href = chatUrl;

    // Function to attempt sending the message
    const attemptSendMessage = () => {
        retries++;

        try {
            // Try to find the send button
            const sendButton = tab.document.querySelector("span[data-icon='send']");

            if (sendButton) {
                // If found, click the button
                sendButton.click();
                console.log(`Message sent to ${phone}`);
            } else if (retries < maxRetries) {
                // Retry after a delay if the send button is not found
                setTimeout(attemptSendMessage, 3000); // Retry every 3 seconds
                console.log(`Retrying to find the send button for ${phone}...`);
            } else {
                console.log(`Failed to send message to ${phone}. Send button not found.`);
            }
        } catch (error) {
            console.log(`Error while sending message to ${phone}: ${error}`);
        }
    };

    // Start the retry attempt after a delay to allow the page to load
    setTimeout(attemptSendMessage, 5000);
};

// Generate random delay
const getRandomDelay = () => {
    const delays = [30000, 60000, 120000]; // 30s, 1m, 2m
    return delays[Math.floor(Math.random() * delays.length)];
};

// Send messages with random delays
const sendMessagesRandomly = () => {
    let currentIndex = 0;
    let tab = null; // Reference to the WhatsApp Web tab

    const sendNextMessage = () => {
        if (currentIndex < phoneNumbers.length) {
            const phone = phoneNumbers[currentIndex];

            // Open a new tab for the first message, reuse the tab for subsequent messages
            if (!tab || tab.closed) {
                tab = window.open('', '_blank');
            }

            sendMessage(tab, phone, message);

            // Generate a random delay for the next message
            const delay = getRandomDelay();
            console.log(`Next message will be sent in ${delay / 1000} seconds`);

            // Increment the index and wait for the next message
            currentIndex++;
            setTimeout(sendNextMessage, delay);
        } else {
            console.log("All messages sent!");
        }
    };

    // Start sending messages
    sendNextMessage();
};

// Example usage
let phoneNumbers = ['+91XXXXXXXXXX', '+91XXXXXXXXX', '+91XXXXXXXXXX'];// enter the number along with the country code
let message = "Hello, this is an automated message from WhatsApp Web!";
sendMessagesRandomly();

