import React from "react";
import blogData from "../../data/blog.json";
import CurlyTitles from "../../components/Headings/CurlyTitles";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

export default function BlogComponent() {
  const allPostData = blogData.blogHomePage.posts;

  return (
    <div className="blog-component">
      <div className="mt-[-15px] mb-10">
        <CurlyTitles titleName={"Blogs"} />
      </div>

      <div className="blog-comp-container">
        {allPostData?.map((post) => (
          <div className="lg:w-[29%] sm:w-[100%]">
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
                  <a
                    href={post?.readUrl}
                    target="_blank"
                    className="text-blue-500"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/blogs">
        <div className="blog-btn">
          <div>
            <h1>See More Blogs</h1>
          </div>
          <div>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
