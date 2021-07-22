import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  const addMeetup = (meetup) => {
    axios.post("/api/new-meetup", meetup);
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add a new Meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </>
  );
};

export default NewMeetup;
