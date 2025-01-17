const express = require('express');
const app = express();

const STATUS_CODES = {
    200: "OK: The request has succeeded.",
    201: "Created: The request has succeeded, and a new resource has been created.",
    204: "No Content: The server successfully processed the request, but no content is returned.",
    400: "Bad Request: The server cannot process the request due to client-side errors.",
    401: "Unauthorized: Authentication is required or has failed.",
    403: "Forbidden: The server refuses to authorize the request.",
    404: "Not Found: The server can't find the requested resource.",
    405: "Method Not Allowed: The method is not supported for the target resource.",
    429: "Too Many Requests: Too many requests in a short period.",
    500: "Internal Server Error: The server encountered an unexpected error.",
    502: "Bad Gateway: Invalid response from an upstream server.",
    503: "Service Unavailable: The server is overloaded or under maintenance.",
    504: "Gateway Timeout: The server didn't receive a response in time."
};

app.get('/status-info', (req, res) => {
    const code = parseInt(req.query.code);
    if (STATUS_CODES[code]) {
        res.json({ status: code, message: STATUS_CODES[code] });
    } else {
        res.status(400).json({ error: "Status code not recognized or missing." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
