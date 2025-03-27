// Entry point for the Node.js server.
const express = require('express');
const app = express();
const ticketRoutes = require('./routes/ticketRoutes');

app.use('/api/tickets', ticketRoutes);
