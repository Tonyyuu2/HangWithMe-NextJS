import { MongoClient } from "mongodb";
import Head from "next/head";

import HangoutList from "../components/hangouts/HangoutList";

export default function Home({ hangouts }) {
  return (
    <div>
      <Head>
        <title>EventLoops</title>
      </Head>
      <HangoutList hangouts={hangouts} />
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`
  );

  const db = client.db();

  const hangoutsCollection = db.collection("hangouts");

  const hangouts = await hangoutsCollection.find().toArray();
  console.log("hangouts :", hangouts);

  client.close();

  return {
    props: {
      hangouts: hangouts.map((hangout) => ({
        title: hangout.title,
        address: hangout.address,
        image: hangout.image,
        id: hangout._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
