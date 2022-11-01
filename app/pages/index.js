import HangoutList from "../components/hangouts/HangoutList";

import testImage from "../public/images/testimage.jpg";

const MOCK_DATA = [
  {
    id: "m1",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout",
  },
  {
    id: "m2",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout2",
  },
  {
    id: "m3",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout3",
  },
  {
    id: "m4",
    title: "Test Hangout",
    image: testImage,
    address: "test address",
    description: "hangout3",
  },
];

export default function Home({ hangouts }) {
  return (
    <div>
      <HangoutList hangouts={hangouts} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      hangouts: MOCK_DATA,
    },
    revalidate: 10
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       hangouts: MOCK_DATA
//     }
//   }
// }
