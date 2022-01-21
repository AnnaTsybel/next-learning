import Head from 'next/head';
import Header from "./Layout/Header";
import Footer from './Layout/Footer';
import styles from'../../styles/Home.module.scss'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Comments app</title>
        <meta name="description" content="comments app"/>
        <meta charSet='utf-8'/>
      </Head>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </>
  );
}
