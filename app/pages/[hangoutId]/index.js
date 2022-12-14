import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import HangoutDetail from "../../components/hangouts/HangoutDetail";

export default function HangoutDetails({ hangoutData }) {
  return (
    <>
      <HangoutDetail {...hangoutData} />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`
  );

  const db = client.db();

  const hangoutsCollection = db.collection("hangouts");

  const hangouts = await hangoutsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: hangouts.map((hangout) => ({
      params: { hangoutId: hangout._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const hangoutId = context.params.hangoutId;

  const client = await MongoClient.connect(
    `mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`
  );

  const db = client.db();

  const hangoutsCollection = db.collection("hangouts");

  const selectedHangout = await hangoutsCollection.findOne({
    _id: ObjectId(hangoutId),
  });

  client.close();

  return {
    props: {
      hangoutData: {
        id: selectedHangout._id.toString(),
        title: selectedHangout.title,
        address: selectedHangout.address,
        image: selectedHangout.image,
        description: selectedHangout.description,
      },
    },
  };
}
