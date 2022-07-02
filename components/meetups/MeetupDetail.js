import Image from "next/image";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = ({
  image, title, address, description,
}) => (
  <section className={classes.detail}>
    <Image
      src={image}
      alt={title}
      width={1024}
      height={600}
      layout="fixed"
      priority
    />
    <h1>{title}</h1>
    <address>{address}</address>
    <p>{description}</p>
  </section>
);

export default MeetupDetail;
