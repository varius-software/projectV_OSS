import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
        <div className="flex w-full h-screen">
            <div className=' w-1/4'>
                aa
            </div>
            <div className='w-3/4'>
                aa
                <br/>
                <a href={'/next'}>next</a>
                <a href={'https://variussoftware.com/'}>web</a>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
