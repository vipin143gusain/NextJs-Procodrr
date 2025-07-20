/** @format */

import Link from '../../../../ep-12/node_modules/next/link';
import React from 'react';

export const metadata = {
   title: {
      absolute: 'My Files',
   },
};

const filePath = async ({ params }) => {
   console.log(await params);
   const { filePath } = await params;
   return (
      <div>
         <center>
            <Link href='/'>Back to Home</Link>
            <h1>Path = /{filePath?.join('/')}</h1>
         </center>
      </div>
   );
};

export default filePath;
