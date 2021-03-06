import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://images.wallpaperscraft.com/image/single/bridge_architecture_gothic_134848_1024x600.jpg",
    address: "Some address 5, 123456 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://images.wallpaperscraft.com/image/single/bridge_architecture_gothic_134848_1024x600.jpg",
    address: "Some address 5, 123456 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = ({ meetups }) => <MeetupList meetups={meetups} />;

// export async function getServerSideProps(context) {
//   const { req, res } = context;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
