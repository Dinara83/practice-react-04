import { useSelector } from 'react-redux';
import { getUsers } from 'redux/Users/userSelector';

export const HomePage = () => {
  const users = useSelector(getUsers);
  const elements = users.map(({ name, age, id }) => {
    return (
      <li>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button></button>
      </li>
    );
  });
  return (
    <>
      <div>Home</div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};
