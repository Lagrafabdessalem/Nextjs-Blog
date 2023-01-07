import * as React from 'react';
import Posts from '../../../components/Posts';
import { getAuthorBySlug, getCareer, getWeb } from '../../../lib/api';


export default function({posts}) {
  return (
      <Posts posts={posts}/>
  )
}


export function getStaticProps(){
  return {
  props:{
    posts: getCareer().map((post) => ({
      ...post,
      author: getAuthorBySlug(post.author),

    })),
  }
}
}