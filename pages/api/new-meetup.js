import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://turbonater62:turbonater62@cluster0.7yu0z.mongodb.net/Meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    await client.close();
    res.status(200).json({ message: "Inserted!" });
  }
}

export default handler;
