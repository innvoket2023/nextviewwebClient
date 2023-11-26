import Image from 'next/image';
import React, { useState } from 'react';
import '../app/globals.css';  // Import the globals.css file
import VerticalNavbar from '@/components/VerticalNavbar';

export default function Activated() {

  return (
    <div className='h-screen  bg-white '>
        <VerticalNavbar/>

    </div>
  );
}
