/** @format */

'use client';
import { usePathname } from '../../../ep-12/node_modules/next/navigation';
import React from 'react';

const notFound = () => {
   let error = usePathname();

   return (
      <div>
         <center>
            <h1>Custom Page of Not-Found - {error}</h1>
         </center>
      </div>
   );
};

export default notFound;
