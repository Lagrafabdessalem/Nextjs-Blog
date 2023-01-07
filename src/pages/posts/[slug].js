import Post from "../../components/Post";
import { getAuthorBySlug, getPosts, getPostsBySlug } from "../../lib/api";



export default function Posts({post}){
    return(
      <Post post={post} />
    )

}

export function getStaticProps({params}){
    const post = getPostsBySlug(params.slug)
    return{
        props:{
            post:{
                ...post,
                author:getAuthorBySlug(post.author)
            }
        }
    }
}
export function getStaticPaths() {
      return {
       fallback: false,
        paths: getPosts().map(post => ({
          params: {
            slug: post.slug,
          },
       })),
      }}