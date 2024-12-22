const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    url: 'redis://redis-server:6379'
});

client.on('error', (err) => {
    console.error('Redis client error', err);
});

client.connect().then(() => {
    client.set('visits', 0);

    app.get('/', async (req, res) => {
        try {
            // process.exit(0);
            const visits = await client.get('visits');
            res.send('Number of visits is ' + visits);
            await client.set('visits', parseInt(visits) + 1);
        } catch (err) {
            res.status(500).send('Error retrieving visits');
        }
    });

    app.listen(8080, () => {
        console.log('listening on port 8080');
    });
}).catch((err) => {
    console.error('Failed to connect to Redis', err);
});
