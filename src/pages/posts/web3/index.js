import * as React from 'react';
import Posts from '../../../components/Posts';
import { getAuthorBySlug, getWeb3 } from '../../../lib/api';


export default function({posts}) {
  return (
      <Posts posts={posts}/>
  )
}


export function getStaticProps(){
  return {
  props:{
    posts: getWeb3().map((post) => ({
      ...post,
      author: getAuthorBySlug(post.author),

    })),
  }
}
}