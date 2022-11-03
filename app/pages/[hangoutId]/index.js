import { MongoClient } from "mongodb";
import React from "react";
import HangoutDetail from "../../components/hangouts/HangoutDetail";

export default function HangoutDetails() {
  return (
    <>
      <HangoutDetail />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://tonyyuu2:${process.env.DB_PASS}@cluster0.vdjd6hv.mongodb.net/hangwithme?retryWrites=true&w=majority`
  );

  const db = client.db();

  const hangoutsCollection = db.collection("hangouts");

  return {
    paths: [
      {
        params: {
          hangoutId: "m1",
        },
        params: {
          hangoutId: "m2",
        },
      },
    ],
  };
}
