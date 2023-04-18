import React from 'react';
import Head from 'next/head.js';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Best Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        { children }
      </main>
      <footer>
        < Footer />
      </footer>
    </div>
  )
}

export default Layout