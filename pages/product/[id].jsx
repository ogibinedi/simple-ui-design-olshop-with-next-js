import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: '/images/featured-image-2.png',
    name: 'CAMPAGNOLA',
    price: [15000, 25000, 45000],
    desc: 'Pizza yang dibuat dengan bahan pilihan dibalut dengan keju mozzarella'
  }
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} alt="product image" width="400" height="400" objectFit='cover' />
            </div>
        </div>
        <div className={styles.rightSide}>
            <h1 className={styles.title}>
                {pizza.name}
            </h1>
            <span className={styles.price}>Rp {pizza.price[size]},-</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Pilih ukuran pizza</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image src="/images/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Kecil</span>
                </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                    <Image src="/images/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Sedang</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image src="/images/size.png" alt="" layout="fill" />
                    <span className={styles.number}>Besar</span>
                </div>
            </div>
            <h3 className={styles.choose}>
                Pilih tambahan toping atau bahan
            </h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="double" name="double" />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="cheese" name="cheese" />
                    <label htmlFor="cheese">Ekstra Keju</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="spicy" name="spicy" />
                    <label htmlFor="spicy">Ekstra Pedas</label>
                </div>
                <div className={styles.option}>
                    <input className={styles.checkbox} type="checkbox" id="garlic" name="garlic" />
                    <label htmlFor="garlic">Ekstra Bawang Putih</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Tambah ke keranjang</button>
            </div>
        </div>
    </div>
  );
};

export default Product;