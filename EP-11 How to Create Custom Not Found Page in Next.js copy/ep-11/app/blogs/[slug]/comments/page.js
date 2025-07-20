/** @format */

import Link from '../../../../../ep-12/node_modules/next/link';
import React from 'react';

const Comments = async ({ params, searchParams }) => {
   console.log('params', await params);
   console.log('searchParams', await searchParams);
   const { slug } = await params;
   return (
      <div>
         <center>
            <h1>Comment {slug}</h1>
            <Link href='/'>Back to Home</Link>
         </center>
      </div>
   );
};

export default Comments;
