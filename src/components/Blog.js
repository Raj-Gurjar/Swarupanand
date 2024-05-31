import React from "react";
import blogData from "../data/blog.json";

export default function Blog() {
  const allPostData = blogData.blogPage.posts;

  return (
    <div>
      <h1>Blogs</h1>

      <div className="">
        {allPostData?.map((post) => (
          <div key={post?.id} className="bg-pink-100 m-5">
            <div>
              <img
                src={post?.image?.url}
                alt="post-img"
                className="h-[400px] w-[400px]"
              />
            </div>
            <div>
              <p>By : {post?.author}</p>
              <p>Data : {post?.datePublished}</p>
              <div className="bg-red-300">
                {post?.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>

            <div>
              <p>Title : {post?.title}</p>
            </div>

            <div>
              <p>Content : {post?.content}</p>
            </div>
            <div>
              <p>
                <a href={post?.readUrl} className="text-blue-500">
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
