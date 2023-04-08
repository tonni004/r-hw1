import PropTypes from 'prop-types';
// import Friends from './Friends';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
    return (
        <ul className={styles.friendsList}>
            {friends.map((friend) =>
                <li className={styles.friendsList__item} key={friend.id}>

                    {
                        friend.isOnline
                            ? <span className={styles.online}>{friend.isOnline}</span>

                            : <span className={styles.offline}>{friend.isOnline}</span>
                    }

                    <img className={styles.avatarImg} src={friend.avatar} alt={friend.name} width="50" />
                    <p className={styles.text}>{friend.name}</p>
                </li>
            )}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendsList;