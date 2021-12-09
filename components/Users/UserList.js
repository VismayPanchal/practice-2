import UserInfo from './UserInfo';
import classes from './UserList.module.css';

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((meetup) => (
        <UserInfo
          key={meetup.id}
          id={meetup.id}
          name={meetup.name}
          image={meetup.image}
        />
      ))}
    </ul>
  );
}

export default UserList;
