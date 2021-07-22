import classes from "./Meetup.module.css";

const MeetupDetail = ({ image, title, address, description }) => {
  return (
    <div className={classes.detail}>
      <img src={image} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </div>
  );
};

export default MeetupDetail;
