import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => (
  <MeetupDetail
    image="https://images.wallpaperscraft.com/image/single/bridge_architecture_gothic_134848_1024x600.jpg"
    title="A First Meetup"
    address="Some Street 5, Some City"
    description="The meetup description"
  />
);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from a single meetup

  const { params } = context;
  const { meetupId } = params;

  console.log("meetupId: ", meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://images.wallpaperscraft.com/image/single/bridge_architecture_gothic_134848_1024x600.jpg",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
