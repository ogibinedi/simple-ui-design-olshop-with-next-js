import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/images/featured-image-1.png" alt="product 1" width="500" height="500" />
        <h1 className={styles.title}>PIZZA MERDEKA 77</h1>
        <span className={styles.price}>Rp. 15000,-</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  );
};

export default ProductCard;