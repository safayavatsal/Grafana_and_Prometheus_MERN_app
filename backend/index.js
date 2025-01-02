const express = require('express')
const cors = require('cors')
require('dotenv').config()
//const express = require('express');
const promClient = require('prom-client');
const mongoose = require('mongoose');
// Create a Registry to register the metrics
const register = new client.Registry();

const app = express()
PORT = process.env.PORT
const conn = require('./conn')
app.use(express.json())
app.use(cors())

const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();


const tripRoutes = require('./routes/trip.routes')

app.use('/trip', tripRoutes) // http://localhost:3001/trip --> POST/GET/GET by ID

// Add metric instances for API response times, request counts, and error rates
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_microseconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 10]
});

const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'code']
});

const httpRequestErrorsTotal = new client.Counter({
  name: 'http_request_errors_total',
  help: 'Total number of HTTP request errors',
  labelNames: ['method', 'route', 'code']
});

app.use((req, res, next) => {
  const end = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
      end({ method: req.method, route: req.route.path, status: res.statusCode });
  });
  next();
});

// Metrics endpoint for Prometheus
app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(promClient.register.metrics());
});

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})
























// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }).catch(err => console.log(err));