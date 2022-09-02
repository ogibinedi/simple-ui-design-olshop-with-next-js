
import styles from '../styles/Featured.module.css';
import Image from 'next/dist/client/image';
import { useState } from 'react';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/featured-image-1.png",
    "/images/featured-image-2.png",
    "/images/featured-image-3.png"
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
        setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
        setIndex(index !== 2 ? index + 1 : 0);
    }
  }
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
            <Image src="/images/arrowl.png" alt="arrow" layout="fill" objectFit='contain' />
        </div>
        <div className={styles.wrapper} style={{ transform: `translateX(${-100*index}vw)`}}>
                {images.map((image, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={image}  alt="feature image" layout='fill' objectFit='contain' />
                    </div>
                ))}
        </div>
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
            <Image src="/images/arrowr.png" alt="arrow" layout="fill" objectFit='contain' />
        </div>
    </div>
  );
};

export default Featured;