import React from "react";
import bgFooterTop from "../data/assets/background/footer-top.png";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-slate-300 min-h-[70vh] footer mt-5">
      {/* <img src={bgFooterTop} alt="" className="object-cover" /> */}
      <div className="flex justify-between p-5 pt-20">
        <div>
          <p>Logo</p>
          <p>Tagline</p>
        </div>

        <div>
          <p>Links</p>
          <ul>
            <li>
              <NavLink to="/home">
                {" "}
                <span>icon </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                {" "}
                <span>icon </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                {" "}
                <span>icon </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                {" "}
                <span>icon </span>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                {" "}
                <span>icon </span>Home
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bg-blue-300">
          <div>
            <div>
              <h1 className="text-white text-[24px]">Official Info</h1>
              <span className="underline"></span>
            </div>

            <p>
              <span>MAp icon</span>
              <span>address</span>
            </p>
            <p>
              <span>Phone icon</span>
              <span>4343434</span>
            </p>
            <p>
              <span>email</span>
              <span>email@dsld</span>
            </p>
          </div>

          <div>
            <h1>Open Hours</h1>
            <p>Mon-Sat : 8am - 5pm</p>
            <p>Sun : CLOSED</p>
          </div>
        </div>

        <div>
          <p>Social Media</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}
