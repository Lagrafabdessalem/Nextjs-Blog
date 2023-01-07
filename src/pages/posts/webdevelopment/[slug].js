import Post from "../../../components/Post";
import { getAuthorBySlug, getWeb, getWebBySlug } from "../../../lib/api";

export default function Posts({post}){
    return(
      <Post post={post} />
    )

}

export function getStaticProps({params}){
    const post = getWebBySlug(params.slug)
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
        paths: getWeb().map(post => ({
          params: {
            slug: post.slug,
          },
       })),
      }}