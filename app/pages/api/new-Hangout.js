import { MongoClient } from 'mongodb'



export default function handler(req, res) {
  if (req.method == 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(`mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/?retryWrites=true&w=majority`);
  }
}