import { MongoClient } from 'mongodb'



export default async function handler(req, res) {
  if (req.method == 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(`mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`);
    
    const db = client.db();

    const hangoutsCollection = db.collection('hangouts');
    
    const result = await hangoutsCollection.insertOne(data);
    
    console.log('result :', result);
    

    client.close()


    res.status(201).json({ messsage: "success"});
  }


}