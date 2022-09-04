import styles from '../styles/ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import formatIDR from '../util/idr';

const ProductCard = ({ pizza }) => {
  return (
    <Link href={`/product/${pizza._id}`} passHref>
      <div className={styles.container}>
          <Image src={pizza.img} alt="product 1" width="500" height="500" />
          <h1 className={styles.title}>{pizza.title}</h1>
          <span className={styles.price}>IDR {formatIDR(pizza.prices[0])},-</span>
          <p className={styles.desc}>{pizza.desc}</p>
      </div>
    </Link>
  );
};

export default ProductCard;