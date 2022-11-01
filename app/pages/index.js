import HangoutList from "../components/hangouts/HangoutList"

import testImage from '../public/images/testimage.jpg'

const MOCK_DATA = [
  {
    id: 'm1',
    title: 'Test Hangout',
    image: testImage,
    address: 'test address',
    description: 'hangout'
  },
  {
    id: 'm2',
    title: 'Test Hangout',
    image: testImage,
    address: 'test address',
    description: 'hangout2'
  },
  {
    id: 'm3',
    title: 'Test Hangout',
    image: testImage,
    address: 'test address',
    description: 'hangout3'
  },
  {
    id: 'm4',
    title: 'Test Hangout',
    image: testImage,
    address: 'test address',
    description: 'hangout3'
  },
]

export default function Home() {
  return (
    <div>
      <HangoutList hangouts={MOCK_DATA}/>
    </div>
  )
}
