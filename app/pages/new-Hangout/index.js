import { useRouter } from 'next/router';
import React from 'react'

import HangoutForm from '../../components/hangouts/HangoutForm'

export default function NewHangoutsPage() {

  const router = useRouter()

  async function addHangoutHandler(hangoutData) {
    const response = await fetch('/api/new-Hangout', {
      method: 'POST',
      body: JSON.stringify(hangoutData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const  data = await response.json();
    console.log(data);

    router.push('/')
  }

  return (
    <div>
      <HangoutForm onAddMeetup={addHangoutHandler}/>
    </div>
  )
}
