import styles from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = ({ allProducts }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nemo at, labore porro reiciendis rem ad tempora blanditiis adipisci a eum animi obcaecati, dignissimos non perspiciatis natus corrupti consectetur libero.</p>
        <div className={styles.wrapper}>
          {allProducts.map((pizza) => <ProductCard key={pizza._id} pizza={pizza} />)}
        </div>
    </div>
  );
};

export default ProductList;