import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
import Card from '../user-interface/Card'
import classes from './styling/hangoutListItem.module.css'

export default function HangoutListItem({ id, image, title, address }) {
  const router = useRouter();

  function showDetailHandler() {
    router.push(`/${id}`)
  }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={image} alt={title} priority/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}
