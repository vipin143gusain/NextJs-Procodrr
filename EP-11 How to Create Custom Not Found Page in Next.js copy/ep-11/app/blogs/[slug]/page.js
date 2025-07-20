/** @format */

import Link from '../../../../ep-12/node_modules/next/link';
import { notFound } from '../../../../ep-12/node_modules/next/navigation';
import React from 'react';

export const generateMetadata = async ({ params }) => {
   const { slug } = await params;
   return {
      title: `Blog ${await slug}`,
   };
};

const AppDev = async ({ params, searchParams }) => {
   console.log('params', await params);
   console.log('searchParams', await searchParams);
   const { slug } = await params;

   if (isNaN(slug)) {
      notFound();
   }

   return (
      <div>
         <center>
            <h1>Blog {slug}</h1>
            <Link href='/'>Back to Home</Link>
         </center>
      </div>
   );
};

export default AppDev;
