import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Використання CSS модулів

const Home = () => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <h1>Welcome to My Next.js Project</h1>
      <p>This is the homepage.</p>
    </main>
    <Footer />
  </div>
);

export default Home;