import useGun from './useGun';
import Gun from 'gun/gun';
import useAuth from './useAuth';

const useFriend = () => {
  const {gun, app, user, SEA} = useGun();
  const {state} = useAuth();

  const myKey = state.profile?.pair;
  const addFriend = userId => {
    app
      .get('users')
      .map(node => (`${node.name}#${node.id}` === userId ? node : undefined))
      .once(async (node, _) => {
        const taggedUsername = node.name + '#' + node.id;
        const pub = node.pub;
        const epub = node.epub;

        // Generate throwaway key (Inspired by Houses api)
        var throwaway = await SEA.pair();
        // Elliptic curve Diffie-Hellman with the throwaway key
        // Helps to obfuscate who sent what to the user
        var shared = await SEA.secret(epub, throwaway);
        var message = {pub: myKey.pub, type: 'request'};
        var encrypted = await SEA.encrypt(message, shared);

        var hash = await SEA.work(encrypted, null, null, {name: 'SHA-256'});
        var certificate = await SEA.certify(pub, {'*': 'inbox'}, myKey, null, {
          expiry: Gun.state() + 60 * 60 * 24 * 1000,
          blacklist: 'blacklist',
        });
        user
          .get('friends')
          .get(hash)
          .set({pub: pub, epub: epub, username: taggedUsername});

        var payload = {
          data: encrypted,
          epub: throwaway.epub,
          hash: hash,
          cert: certificate,
        };

        // Notify user with the payload
        gun.get(`@${pub}`).get('notifications').set(payload);

        console.log({taggedUsername, hash, message, pub, certificate});
      });
    // Recieve notifications from users
  };
  const recieveNotif = key => {
    gun
      .get(`@${key.pub}`)
      .get('notifications')
      .on((data, _) => {
        console.log('Notified', data);
      });
  };

  return {addFriend, recieveNotif};
};

export default useFriend;
