import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css['profile-info']}>
        <img
          className={css['profile-img']}
          width="200"
          height="200"
          src={image}
          alt={`${name}'s avatar`}
        />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-tag']}>@{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>

      <ul className={css['profile-stats']}>
        <li className={css['profile-stats-item']}>
          <span className={css['profile-stats-item-info']}>Followers</span>
          <span className={css['profile-stats-item-quantity']}>{stats.followers}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span className={css['profile-stats-item-info']}>Views</span>
          <span className={css['profile-stats-item-quantity']}>{stats.views}</span>
        </li>
        <li className={css['profile-stats-item']}>
          <span className={css['profile-stats-item-info']}>Likes</span>
          <span className={css['profile-stats-item-quantity']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
