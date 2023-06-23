import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css['stats-item']}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{formatNumber(views)}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

function formatNumber(number) {
  let strNumber = String(number);

  const hasComma = strNumber.indexOf('.') !== -1;

  let [integerPart, decimalPart] = hasComma
    ? strNumber.split('.')
    : [strNumber, ''];

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formattedNumber = hasComma
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  return formattedNumber;
}
