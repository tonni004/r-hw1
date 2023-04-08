import PropTypes from 'prop-types';
import styles from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, likes, views, followers }) => {
    return (
        <div className={styles.profileCard}>
            <div>
                <img className={styles.profileImg} src={avatar} alt={username} width="100" />
            </div>

            <p className={styles.username}>{username}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>

            <ul className={styles.staticticCard}>
                <li className={styles.staticticCard__item}>
                    <span>Followers</span>
                    <span className={styles.staticticNumbers}>{followers}</span>
                </li>
                <li className={styles.staticticCard__item}>
                    <span>Views</span>
                    <span className={styles.staticticNumbers}>{views}</span>
                </li>
                <li className={styles.staticticCard__item}>
                    <span>Likes</span>
                    <span className={styles.staticticNumbers}>{likes}</span>
                </li>

            </ul>

        </div>
    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Profile;