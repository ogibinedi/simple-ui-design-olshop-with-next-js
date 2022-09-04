import Head from 'next/head';
import Featured from '../components/Featured';
import ProductList from '../components/ProductList';
import styles from '../styles/Home.module.css';
import axios from 'axios';
const Home = ({ allProducts }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>OlResto UI Design With Next JS</title>
        <meta name="description" content="This is stunning website build using next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ProductList allProducts={allProducts} />
    </div>
  );
};

export const getServerSideProps = async () => {
    const res = await axios.get('https://ogiui-designolshop.netlify.app/api/products');
    return {
        props: {
            allProducts: res.data
        }
    }
}

export default Home;