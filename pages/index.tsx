// @ts-nocheck

import type { NextPage } from 'next';
import Head from 'next/head';
import { StoreContext, StoreProvider } from '../components/Store';
import { Menu } from '../components/Menu';
import { Agent } from '../components/Agent';
import { useContext } from 'react';

const Home: NextPage = () => {
  const globalStore = useContext(StoreContext);
  console.log('globalStore', globalStore);

  return (
    <StoreProvider>
      <div className='flex flex-col items-center min-h-screen gap-12 p-6   text-white  bg-[#ff4655] font-primary '>
        <Head>
          <title>ValoDex</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-col justify-center w-full text-center'>
          <h1 className='text-6xl font-bold font-Valofont '>ValoDex</h1>
        </main>

        <Menu />
        <Agent />
      </div>
    </StoreProvider>
  );
};

export default Home;
