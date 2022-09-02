import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  const today = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bg.png" layout='fill' alt='' objectFit='cover' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            PIZZA HOT, PIZZA PALING NAMPOL
          </h2>
          <Image src="/images/logo2.png" alt="logo" width="200" height="200" objectFit='contain' />
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TEMUKAN RESTORAN KAMI</h1>
          <p className={styles.text}>
            Jl. Satu Banten #125.
            <br />Tangsel 15324
            <br />123-456
          </p>
          <p className={styles.text}>
            Jl. Dua Banten #126.
            <br />Tangsel 15324
            <br />123-456
          </p>
          <p className={styles.text}>
            Jl. Tiga Banten #127.
            <br />Tangsel 15324
            <br />123-456
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>JAM KERJA</h1>
          <p className={styles.text}>
            SENIN S/D JUMAT
            <br />9:00 - 22:00 
          </p>
          <p className={styles.text}>
            SABTU S/D MINGGU
            <br />12:00 - 24:00 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;