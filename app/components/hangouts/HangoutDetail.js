import Image from "next/image";
import React from "react";

import classes from './styling/hangoutDetail.module.css'


export default function HangoutDetail({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <Image src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
