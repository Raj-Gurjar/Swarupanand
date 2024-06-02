import React from "react";
import blogData from "../data/blog.json";
import "./Blog.scss";

export default function Blog() {
  const allPostData = blogData.blogPage.posts;

  return (
    <div>
      <h1>Blogs</h1>

      <div className="blog-page">
        {allPostData?.map((post) => (
          <div class="w-[29%]">
            <div class="card split">
              <div class="image">
                <img src={post?.image?.url} alt="post-img" />
              </div>

              <div class="content">
                <h1>{post?.title}</h1>
                <div className="flex justify-between">
                  <p>By : {post?.author}</p>
                  <p>Data : {post?.datePublished}</p>
                </div>
                <p class="copy">{post?.content.substring(0, 100)}....</p>
                <div className="btn">
                  <a href={post?.readUrl} className="text-blue-500">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
