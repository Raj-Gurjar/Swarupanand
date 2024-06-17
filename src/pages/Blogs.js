import React from "react";
import SectionHeading from "../components/Headings/SectionHeading";
import contactBg from "../data/assets/background/contact-bg.jpg";
import CurlyTitles from "../components/Headings/CurlyTitles";
import "./Blogs.scss";
import Footer from "../components/Footer";
import { MdAccessTime } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";

export default function Blogs() {
  return (
    <div>
      <SectionHeading sectionName={"Blogs"} sectionBg={contactBg} />

      <div className="pb-10">
        <div className="mt-[-50px] mb-12">
          <CurlyTitles titleName={"Read some blogs"} />
        </div>

        <div className="blog-container">
          <div>
            <img src={contactBg} alt="" />
          </div>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          </div>
          <div className="blog-details flex gap-[150px] text-left">
            <div>
              <span>
                <MdAccessTime />
              </span>
              <h2>Date</h2>
            </div>

            <div>
              <span>
                <BsPersonLinesFill />
              </span>
              <h2>Author</h2>
            </div>
          </div>

          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              perferendis repellendus aspernatur nihil voluptas nulla harum
              porro corporis natus, quisquam ipsa amet earum dolor perspiciatis
              blanditiis. Dolores, unde repellendus. Quia!
            </p>
          </div>

          <div>
            <button>Read more</button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
