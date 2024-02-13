const WebSocket = require('ws');

// WebSocket server URL (replace with your server URL)
const SERVER_URL = 'http://localhost:3000';

// Create a WebSocket instance
const ws = new WebSocket(SERVER_URL);

// Event: when the WebSocket connection is established
ws.on('open', () => {
    console.log('Connected to WebSocket server');

    // Send a chat message to the server
    ws.send('Hello, world!');
});

// Event: when the WebSocket server sends a message
ws.on('message', (data) => {
    console.log('Received message:', data);
});

// Event: when the WebSocket connection encounters an error
ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// Event: when the WebSocket connection is closed
ws.on('close', () => {
    console.log('Disconnected from WebSocket server');
});
