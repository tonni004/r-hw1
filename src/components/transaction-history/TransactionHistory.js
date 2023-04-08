import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead >
                <tr className={styles.transitionHeader}>
                    <th className={styles.tableHeader}>Type</th>
                    <th className={styles.tableHeader}>Amount</th>
                    <th className={styles.tableHeader}>Currency</th>
                </tr>
            </thead>

            <tbody >
                {items.map(item => {
                    return (
                        <tr className={styles.tableBody} key={item.id}>
                            <th className={styles.table__item} >{item.type[0].toUpperCase() + item.type.slice(1)}</th>
                            <th className={styles.table__item}> {item.amount}</th>
                            <th className={styles.table__item}>{item.currency}</th>
                        </tr>
                    )
                }
                )}


            </tbody>

        </table>
    )
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;