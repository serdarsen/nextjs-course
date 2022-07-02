import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="meetupTitle">Meetup Title</label>
          <input id="meetupTitle" ref={titleInputRef} type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="meetupImage">Meetup Image</label>
          <input id="meetupImage" ref={imageInputRef} type="url" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="meetupAddress">Address</label>
          <input id="meetupAddress" ref={addressInputRef} type="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="meetupDescription">Description</label>
          <textarea
            id="meetupDescription"
            ref={descriptionInputRef}
            required
            rows="5"
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
