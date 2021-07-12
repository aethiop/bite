import Gun from 'gun/gun';
import 'gun/lib/utils';

export const isValidKey = key => {
  return !!(
    typeof key === `object` &&
    key.pub &&
    key.epub &&
    key.priv &&
    key.epriv
  );
};

export const tagUsernameId = (username, pub) => {
  return username + '#' + Gun.text.random(4).toLowerCase();
};
