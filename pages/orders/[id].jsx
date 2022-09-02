import styles from '../../styles/Order.module.css';
import Image from 'next/image';

const Order = () => {
    const status = 0; 
    const statusClass = (index) => {
        if(index-status < 1) return styles.done
        if(index-status === 1) return styles.inProgress
        if(index-status > 1) return styles.undone
    }
    return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.responsiveTable}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}>Order ID</th>
                            <th className={styles.th}>Customer</th>
                            <th className={styles.th}>Address</th>
                            <th className={styles.th}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.td}>#324646</td>
                            <td className={styles.td}>Budi</td>
                            <td className={styles.td}>Jl. Kesana Kemari No. 1</td>
                            <td className={styles.td}>
                                <span className={styles.total}>Rp. 30.000,-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/images/paid.png" alt="" width="30" height="30" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/images/checked.png" alt="" width="20" height="20" />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/images/bake.png" alt="" width="30" height="30" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/images/checked.png" alt="" width="20" height="20" />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/images/bike.png" alt="" width="30" height="30" />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/images/checked.png" alt="" width="20" height="20" />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/images/delivered.png" alt="" width="30" height="30" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/images/checked.png" alt="" width="20" height="20" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.rightSide}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> Rp. 30.000,-
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> Rp. 0,-
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> Rp. 30.000,-
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order