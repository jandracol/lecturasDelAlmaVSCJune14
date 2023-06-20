import express from 'express';
import { MongoClient as _MongoClient } from 'mongodb';
const app = express();

const MongoClient = _MongoClient;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'your-database-name';
const collectionName = 'your-collection-name';

app.get('/api/pageTitles', (req, res) => {
    MongoClient.connect(mongoURL, (err, client) => {
      if (err) {
        console.log('Error connecting to MongoDB:', err);
        res.status(500).json({ error: 'Failed to connect to the database' });
        return;
      }
  
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      collection.find().toArray((err, documents) => {
        if (err) {
          console.log('Error retrieving page titles:', err);
          res.status(500).json({ error: 'Failed to retrieve page titles' });
          return;
        }
  
        const pageTitles = documents.map((doc) => doc.title);
        res.json({ pageTitles });
      });
  
      client.close();
    });
  });

  const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
