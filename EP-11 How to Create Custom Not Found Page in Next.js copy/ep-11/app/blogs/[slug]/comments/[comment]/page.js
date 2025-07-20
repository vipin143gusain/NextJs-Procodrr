/** @format */

import Link from '../../../../../../ep-12/node_modules/next/link';
import React from 'react';

const comment = async ({ params }) => {
   const { comment } = await params;
   console.log(await params);
   return (
      <div>
         <center>
            <h1>Comment {comment}</h1>
            <Link href='/'>Back to Home</Link>
         </center>
      </div>
   );
};

export default comment;
