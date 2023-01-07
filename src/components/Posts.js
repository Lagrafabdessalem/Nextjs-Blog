import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {useState, useEffect, useRef} from "react"
import Main from './Main';

const Posts = ({posts}) => {
  return (
    <div className=''>
<div className='flex flex-wrap gap-10 my-10 w-[95%] m-auto justify-center border-black border-1'>
     {posts.map((post) => {
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          year: 'numeric',
        })
        return (
          <div className='text-[#393f41] bg-white border-black  border-4 rounded-t-2xl text-center justify-center min-h-[60vh] lg:max-w-[29vw] md:max-w-[40vw]'>
<div >
 <article key={post.slug}>
  <Image src={post.image} alt="ss" height="500" width="450" className="border-t-8 h-[35vh]"/>
  <div className='flex text-center'>
  <Image src={post.author.profilePictureUrl} alt="d" height="20" width="60" className="rounded-2xl"/>
  <div className="flex flex-col">
  <span className='mt-1 font-semibold'>{post.author.name}</span>
  <time dateTime={post.createdAt}>{prettyDate}</time>
    </div>
  
  </div>
  <div>
            <h2 className='font-bold text-[25px] '>
              <Link href={post.permalink}>
                {post.title}
              </Link>
            </h2>
            <div className='flex justify-center gap-10 text-[15px] font-semibold'>
            <span>{post.read}</span> 
                 </div>
                 <button className='bg-black text-white w-32 py-3 font-semibold my-2'>Read more</button>
            </div>
          </article>
          </div>
          </div>
        )
      })}
    </div> 
    </div>
) ;
};

export default Posts;
