/** @format */

import Link from '../../ep-12/node_modules/next/link';

export default function Home() {
   return (
      <center>
         <h1>Home Page</h1>
         <Link href='/about'>About</Link> <Link href='/services'>Service</Link>{' '}
         <Link href='/blogs'>Blogs</Link> <Link href='/files'>Files</Link>
      </center>
   );
}
