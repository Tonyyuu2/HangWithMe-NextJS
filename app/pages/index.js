import { MongoClient } from 'mongodb';

import HangoutList from "../components/hangouts/HangoutList";

import testImage from "../public/images/testimage.jpg";

const MOCK_DATA = [
  {
    id: "m1",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout",
  },
  {
    id: "m2",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout2",
  },
  {
    id: "m3",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout3",
  },
  {
    id: "m4",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout3",
  },
];

export default function Home({ hangouts }) {
  return (
    <div>
      <HangoutList hangouts={hangouts} />
    </div>
  );
}

export async function getStaticProps() {

  const client = await MongoClient.connect(`mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`);
    
    const db = client.db();

    const hangoutsCollection = db.collection('hangouts');

    const hangouts = await hangoutsCollection.find().toArray();
    console.log('hangouts :', hangouts);

    client.close();

  return {
    props: {
      hangouts: hangouts.map(hangout => ({
        title: hangout.title,
        address: hangout.address,
        image: hangout.image,
        id: hangout._id.toString()
      })),
    },
    revalidate: 10
  };
}
