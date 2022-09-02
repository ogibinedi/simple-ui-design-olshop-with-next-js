
import styles from '../styles/Navbar.module.css';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FaPhoneAlt size="26" color='green' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}><h2>123 456</h2></div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <FaShoppingCart color='white' size="30" />
          <div className={styles.counter}>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;