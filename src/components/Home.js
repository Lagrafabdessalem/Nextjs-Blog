import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { Routes } from 'react-router-dom';
import { getAuthorBySlug, getPosts } from '../lib/api';
import Header from './Header';
import Main from './Main';
import Posts from "./Posts"


const Home = () => {
  return(
    <>
   <Header/>
   <Main/>
   </>
  ) ;
};



export default Home;
