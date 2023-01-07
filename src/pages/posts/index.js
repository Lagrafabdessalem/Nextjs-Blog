import Link from 'next/link';
import * as React from 'react';
import {getAuthorBySlug, getAuthors, getPosts, getWeb} from '../../lib/api'
import Image from 'next/image'
import Posts from '../../components/Posts'


export default function({posts}) {
  return (
      <Posts posts={posts}/>
  )
}


export function getStaticProps(){
  return {
  props:{
    posts: getPosts().map((post) => ({
      ...post,
      author: getAuthorBySlug(post.author),
     })),
  }
}
}