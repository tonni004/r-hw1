import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const StatisticsList = ({ title, stats }) => {
    return (
        <div className={styles.statisticsDiv}>
            {title && <h2 className={styles.title}>{title}</h2>}

            < ul className={styles.statisticsCard}>
                {
                    stats.map((data) =>
                        <li className={styles.statisticsCard__item} key={data.id}
                            style={{ backgroundColor: getRandomColor() }} >
                            <span>{data.label}</span>
                            <span className={styles.spanText}>{data.percentage} %</span>
                        </li>
                    )
                }
            </ ul>
        </div>

    )

}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);;
};

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )

}

export default StatisticsList;