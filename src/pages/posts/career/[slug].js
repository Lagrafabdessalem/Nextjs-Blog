import Post from "../../../components/Post";
import { getAuthorBySlug, getCareer, getCareerBySlug, getWeb, getWebBySlug } from "../../../lib/api";

export default function Posts({post}){
    return(
      <Post post={post} />
    )

}

export function getStaticProps({params}){
    const post = getCareerBySlug(params.slug)
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
        paths: getCareer().map(post => ({
          params: {
            slug: post.slug,
          },
       })),
      }}