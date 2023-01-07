import Post from "../../../components/Post";
import { getAuthorBySlug, getWeb, getWeb3, getWeb3BySlug, getWebBySlug } from "../../../lib/api";

export default function Posts({post}){
    return(
      <Post post={post} />
    )

}

export function getStaticProps({params}){
    const post = getWeb3BySlug(params.slug)
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
        paths: getWeb3().map(post => ({
          params: {
            slug: post.slug,
          },
       })),
      }}