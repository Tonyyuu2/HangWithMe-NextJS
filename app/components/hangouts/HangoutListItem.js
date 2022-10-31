import Image from 'next/image'
import React from 'react'
import Card from '../user-interface/Card'
import classes from './styling/hangoutListItem.module.css'

export default function HangoutListItem({ image, title, address }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={image} alt={title}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  )
}
