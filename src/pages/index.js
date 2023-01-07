import Head from 'next/head'
import Posts from '../components/Posts'
import { getAuthorBySlug, getPosts } from '../lib/api'


const Home = ({posts}) => {
  return (
    <div className="">
      <Head>
        <title>Lagraf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Posts posts={posts}/>

         </div>
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
export default Home
