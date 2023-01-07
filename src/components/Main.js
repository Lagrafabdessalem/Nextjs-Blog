import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';


const Main = (props) => {
  return (
    <div className=' w-[95%] m-auto  '>
      <div className='flex justify-center gap-3 flex-wrap m-2 md:gap-1  '>
        <Link href='/posts/webdevelopment'>
          <Button backgroundColor="black" textColor="white" _hover=""  >Web development</Button>
          </Link>

        <Link href='/posts/web3' >
        <Button backgroundColor="black" textColor="white" _hover="" >Web3</Button>
        </Link>

        <Link href='/posts/career' >
        <Button backgroundColor="black" textColor="white" _hover="" >Career</Button>
        </Link>

    </div>
  </div>
  )
};

export default Main;
