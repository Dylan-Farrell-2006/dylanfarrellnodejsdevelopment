// Import http module
const http = require('http');

// Port number
const port = process.env.PORT || 3000;

// Request handler
const requestHandler = (req, res) => {
    try {
        // Basic routing
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to your Node.js server!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 - Page Not Found');
        }
    } catch (error) {
        console.error('Error handling request:', error);

        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error');
    }
};

// Create server
const server = http.createServer(requestHandler);

// Basic timeout handling
server.timeout = 15000;

server.on('timeout', () => {
    console.error('Server request timed out');
});

// Server startup with error handling
server.listen(port, (err) => {
    if (err) {
        console.error('Server startup error:', err);
        return;
    }

    console.log(`Server is running at http://localhost:${port}`);
});