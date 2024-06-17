import React from "react";
import blogData from "../data/blog.json";
import "./Blog.scss";
import CurlyTitles from "./Headings/CurlyTitles";

export default function Blog() {
  const allPostData = blogData.blogHomePage.posts;

  return (
    <div>
       <CurlyTitles titleName={"Blogs"} />

      <div className="blog-page">
        {allPostData?.map((post) => (
          <div className="w-[29%]">
            <div className="blog-card split">
              <div className="blog-image">
                <img src={post?.image?.url} alt="post-img" />
              </div>

              <div className="blog-content">
                <h1>{post?.title}</h1>
                <div className="flex justify-between">
                  <h2>By : {post?.author}</h2>
                  <h2>{post?.datePublished}</h2>
                </div>
                <p className="copy">{post?.content.substring(0, 100)}....</p>
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
