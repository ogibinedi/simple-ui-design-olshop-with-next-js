import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.responsiveTable}>
                <table className={styles.table}>
                    <thead className={styles.tr}>
                        <tr>
                            <th className={styles.th}>Product</th>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Extras</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>Quantity</th>
                            <th className={styles.th}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.td}>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/featured-image-1.png" layout="fill" alt="product" objectFit="cover" />
                                </div>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td className={styles.td}>Double Ingredients, Spicy Sauce</td>
                            <td className={styles.td}>Rp. 15.000,-</td>
                            <td className={styles.td}>2</td>
                            <td className={styles.td}>
                                <span className={styles.total}>Rp. 30.000,-</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.td}>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/featured-image-1.png" layout="fill" alt="product" objectFit="cover" />
                                </div>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td className={styles.td}>Double Ingredients, Spicy Sauce</td>
                            <td className={styles.td}>Rp. 15.000,-</td>
                            <td className={styles.td}>2</td>
                            <td className={styles.td}>
                                <span className={styles.total}>Rp. 30.000,-</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td className={styles.td}>
                                <div className={styles.imgContainer}>
                                    <Image src="/images/featured-image-1.png" layout="fill" alt="product" objectFit="cover" />
                                </div>
                            </td>
                            <td className={styles.td}>
                                <span className={styles.name}>CORALZO</span>
                            </td>
                            <td className={styles.td}>Double Ingredients, Spicy Sauce</td>
                            <td className={styles.td}>Rp. 15.000,-</td>
                            <td className={styles.td}>2</td>
                            <td className={styles.td}>
                                <span className={styles.total}>Rp. 30.000,-</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                <button className={styles.button}>CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  );
};

export default Cart;