import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewUser.module.css';

function NewMeetupForm(props) {
  const nameRef = useRef();
  const imageInputRef = useRef();
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredImage = imageInputRef.current.value;
 

    const meetupData = {
      name: enteredName,
      image: enteredImage,

    };

    props.onAddUser(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>User Name</label>
          <input type='text' required id='title' ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>User Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
