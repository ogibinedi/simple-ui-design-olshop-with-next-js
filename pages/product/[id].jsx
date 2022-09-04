import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';
import formatIDR from '../../util/idr';

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number)
  }
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }
  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if ( checked) {
        changePrice(option.price);
        // setExtras((prev)=> [...prev, option])
        setExtras([...extras, option])
    }else {
        changePrice(-option.price);
        setExtras(extras.filter((extra) => extra._id !== option._id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }))
  }

  return (
    <>
        <Head>
            <title>{pizza.title}</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="product image" width="300" height="300" objectFit='cover' />
                </div>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.title}>
                    {pizza.title}
                </h1>
                <span className={styles.price}>IDR {formatIDR(price)},-</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Pilih ukuran pizza</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/images/size.png" alt="" layout="fill" />
                        <span className={styles.number}>Kecil</span>
                    </div>
                        <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/images/size.png" alt="" layout="fill" />
                        <span className={styles.number}>Sedang</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/images/size.png" alt="" layout="fill" />
                        <span className={styles.number}>Besar</span>
                    </div>
                </div>
                <h3 className={styles.choose}>
                    Pilih tambahan toping atau bahan
                </h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map(option => (
                        <div key={option._id} className={styles.option}>
                            <input 
                            className={styles.checkbox} 
                            type="checkbox" 
                            id={option.text} 
                            name={option.text}
                            onChange={(e) => handleChange(e, option)}
                            />
                            <label htmlFor="double">{option.text}</label>
                        </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input
                        onChange={(e) => setQuantity(e.target.value)} 
                        type="number" 
                        defaultValue={1} 
                        className={styles.quantity} />
                    <button className={styles.button} onClick={handleClick}>Tambah ke keranjang</button>
                </div>
            </div>
        </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`) ;
    return {
        props: {
            pizza: res.data
        }
    }
}

export default Product;