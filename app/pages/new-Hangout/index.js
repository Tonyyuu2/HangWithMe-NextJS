import React from 'react'

import HangoutForm from '../../components/hangouts/HangoutForm'

export default function NewHangoutsPage() {

  function addHangoutHandler(hangoutData) {
    console.log(hangoutData);
  }

  return (
    <div>
      <HangoutForm onAddMeetup={addHangoutHandler}/>
    </div>
  )
}
