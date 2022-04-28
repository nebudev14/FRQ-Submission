import Head from 'next/head'
import Image from 'next/image'

import { FaGoogle } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      <h1 className='mb-8 text-2xl'>Mr Chen's FRQ Submission Page</h1>
      <button className='px-3 py-4 border border-pink-600 rounded-md'>
        <FaGoogle size={25} className='inline mr-2' /> Sign in with Google
      </button>
    </div>
  )
}
