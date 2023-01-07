import { Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Image from 'next/image';
import * as React from 'react';
import Log from "../../public/Log.png"
import {AiOutlineSearch} from "react-icons/ai"



const Header = (props) => {
  return(
/*     <div>
    <div className='header bg-gray-400 '>
      <nav className='flex justify-center gap-10'>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/authors'>Author</Link>
      </nav>
    </div>
  </div> */
  <div className='w-100 bg-black'>
<Flex className="justify-between flex-wrap-reverse gap-3" width="90%" margin="auto">
    <div>
      <Image src={Log} alt="logo" height="50" width="50" className=""/>
    </div>
    <div className='mt-1'>
      <InputGroup>
      <InputLeftElement
        pointerEvents="none"
       children={<AiOutlineSearch className="text-white"/>} />
      <Input type="search" placeholder="Search..." />
      </InputGroup>
    </div>  
  </Flex>
  </div>
  ) ;
};

export default Header;
