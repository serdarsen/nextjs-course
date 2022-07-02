import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = ({ title, image, address }) => (
  <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <Image src={image} alt={title} width={1024} height={600} layout="fixed" priority />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
      <div className={classes.actions}>
        <button type="button">Show Details</button>
      </div>
    </Card>
  </li>
);

export default MeetupItem;
