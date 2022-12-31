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
      <div className='flex min-h-screen flex-col items-center bg-slate-500 gap-12 p-6 '>
        <Head>
          <title>ValoDex</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex w-full justify-center flex-col text-center'>
          <h1 className='text-6xl font-bold text-white'>ValoDex</h1>
        </main>

        <Menu />
        <Agent />
      </div>
    </StoreProvider>
  );
};

export default Home;
