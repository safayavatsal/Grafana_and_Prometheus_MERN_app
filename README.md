# MERN-Application-with-Grafana-and-Prometheus
Assignment Tasks:

1. MERN Application Setup:

   - Deploy a travel memory application in your local machine.

2. Integrate Prometheus:

   - Integrate Prometheus metrics into the Node.js backend. Use client libraries to expose custom metrics like API response times, request counts, and error rates.

   - Set up MongoDB monitoring using an exporter, such as MongoDB Exporter, to track database performance.

3. Enhance Grafana Dashboards:

   - Create advanced Grafana dashboards to display the MERN application's default and custom metrics.

   - Include detailed visualizations for backend performance, database health, and frontend performance (if possible).

4. Log Aggregation:

   - Integrate a log aggregation system (such as Loki, ELK Stack, or Fluentd) to collect and visualize logs from the MERN application.

   - Create a dashboard in Grafana to explore and analyze these logs.

5. Implement Distributed Tracing:

   - Set up distributed tracing in the application using tools like Jaeger or Zipkin.

   - Integrate tracking data into Grafana for a full view of request flows through the application stack.

6. Alerting and Anomaly Detection:

   - Develop sophisticated alerting rules in Grafana based on application-specific metrics and log patterns.

   - Explore anomaly detection with Grafana, using the gathered metrics and logs.

7. Documentation and Analysis:

   - Document the entire setup process, including challenges and how they were addressed.

   - Provide an analysis of the application performance and behaviour based on the collected metrics, logs, and traces.

   - Include screenshots and explanations of the Grafana dashboards.

8. Bonus (Optional):

   - Implement auto-scaling mechanisms based on specific metrics.

   - Explore service mesh integration (like Istio or Linkerd) for more advanced observability features.

----------------------------------------------------
Solution:
# Travel Memory

`.env` file to work with the backend:

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3000
```

Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```
------------------
