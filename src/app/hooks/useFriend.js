import useGun from './useGun';

const useFriend = () => {
  const {gun, app, user, SEA} = useGun();

  const addFriend = userId => {
    console.log(userId);
    app.get('users').get({'=': userId}).once(console.log);
  };
  return {addFriend};
};

export default useFriend;
