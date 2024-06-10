import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import galleryBg from "../data/assets/background/gallary-bh.jpg";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import media from "../data/gallery.json";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <div className="bg-red-100 mt-5">
      <div className=" h-[300px] mb-[110px] flex justify-center align-middle text-center overflow-hidden bg-black">
        <div className="z-10 absolute bg-red-300 mt-[140px]">
          <h1 className="title-2">Gallery</h1>
          <div className="text-[16px] text-white">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              {" "}
              Home
            </span>{" "}
            <span>- </span>
            <span className="capitalize">Photo Gallery</span>
          </div>
        </div>
        <img
          src={galleryBg}
          alt="categoryBg"
          className="z-1 object-fill h-[300px] w-full rounded-lg opacity-50"
        />
      </div>

      <div className="flex flex-col justify-center text-center m-5 mt-10">
        <div className="head-2">
          <span>
            <span>~</span>
            Don't Panic Go Organic
            <span>~</span>
          </span>
        </div>
        <div className="head-3">
          <h1>Watch Our Portfolio</h1>
        </div>
      </div>

      <div>
        
      </div>
      <div className="bg-red-400 py-10 px-4">
        <PhotoAlbum
          style={{ backgroundColor: "green" }}
          photos={media?.images}
          layout="masonry"
          spacing={20}
          columns={3}
          // targetColumnHeight={3}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <div>
        <Lightbox
          slides={media?.images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
}
