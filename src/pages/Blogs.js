import React from "react";
import SectionHeading from "../components/Headings/SectionHeading";
import contactBg from "../data/assets/background/contact-bg.jpg";
import CurlyTitles from "../components/Headings/CurlyTitles";
import "./Blogs.scss";
import Footer from "../components/Footer";
import { MdAccessTime } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import BlogData from "../data/blog.json";

export default function Blogs() {
  const blogsData = BlogData?.blogPage?.posts;

  return (
    <div>
      <SectionHeading sectionName={"Blogs"} sectionBg={contactBg} />

      <div className="pb-10">
        <div className="mt-[-50px] mb-12">
          <CurlyTitles titleName={"Read some blogs"} />
        </div>

        <div className="pb-10 flex flex-col gap-10 flex-wrap">
          {blogsData?.map((blog, index) => (
            <div key={blog?.id} className="blog-container">
              <div>
                <img src={blog?.image?.url} alt={blog?.image?.alt} />
              </div>
              <div>
                <h1>{blog?.title}</h1>
              </div>
              <div className="blog-details flex gap-[150px] text-left">
                <div>
                  <span>
                    <MdAccessTime />
                  </span>
                  <h2>{blog?.datePublished}</h2>
                </div>

                <div>
                  <span>
                    <BsPersonLinesFill />
                  </span>
                  <h2>{blog?.author}</h2>
                </div>
              </div>

              <div>
                <p>{blog?.content}</p>
              </div>

              <div>
                <button>
                  <a href={blog?.readUrl} target="_blank">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
