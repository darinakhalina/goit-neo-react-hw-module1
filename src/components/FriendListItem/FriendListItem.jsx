import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friend-list-item']}>
      <img src={avatar} alt={name} width="48" height="48" />
      <p className={css['friend-list-item-name']}>{name}</p>
      <p
        className={clsx(
          isOnline ? css['friend-list-item-status-online'] : css['friend-list-item-status-offline']
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
