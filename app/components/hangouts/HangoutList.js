import React from "react";
import HangoutListItem from "./HangoutListItem";

import classes from "./styling/hangoutList.module.css";

export default function HangoutList({ hangouts }) {
  const hangoutListItems = hangouts.map((hangout) => {
    return (
      <HangoutListItem key={hangout.id} {...hangout} />
    )
  });

  return <ul className={classes.list}>{hangoutListItems}</ul>;
}
