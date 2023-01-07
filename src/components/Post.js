import Image from 'next/image';
import * as React from 'react';



const Post = ({post}) => {
  return(
    <div className='w-[90%] m-auto text-black'>
      <div>
      <div className='flex text-center'>
  <Image src={post.author.profilePictureUrl} alt="d" height="20" width="60" className="rounded-2xl"/>
  <div className="flex flex-col">
  <span className='mt-1 font-semibold flex'>{post.author.name}</span>
  <div className='flex gap-4'>
  <span>{post.createdAt}</span>
  <span>{post.read}</span>
  </div>
  <span className='font-semibold'>{post.tags}</span>
    </div>
  </div>
    <h2 className='text-[35px] font-bold'>{post.title}</h2>
<div className="h-auto" dangerouslySetInnerHTML={{ __html: post.body }} />
</div>
</div>
  ) ;
};

export default Post;
