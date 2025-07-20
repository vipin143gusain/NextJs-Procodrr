/** @format */

import Link from '../../../ep-12/node_modules/next/link';
import React from 'react';

const Services = () => {
   return (
      <div>
         <center>
            <h1>Services Page</h1>
            <Link href='/'>Back to Home</Link>

            <div>
               <h1>All Services</h1>
               <ul style={{ listStyle: 'none' }}>
                  <li>
                     <Link href='services/app-dev'>App Development</Link>
                  </li>
                  <br />
                  <li>
                     <Link href='services/web-dev'>Web Development</Link>
                  </li>
                  <br />
                  <li>
                     <Link href='services/appWeb-design'>App/Web Design</Link>
                  </li>
                  <br />
                  <li>
                     <Link href='services/seo'>SEO</Link>
                  </li>
               </ul>
            </div>
         </center>
      </div>
   );
};

export default Services;
