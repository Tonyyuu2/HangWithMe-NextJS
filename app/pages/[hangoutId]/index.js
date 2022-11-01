import Image from "next/image";
import React from "react";
import testImage from "../../public/images/testimage.jpg";

export default function HangoutDetails() {
  return (
    <>
      <Image src={testImage} alt="hangin' out" />
      <h1>Hangout</h1>
      <address>Streetview street</address>
      <p>Hangout description</p>
    </>
  );
}
