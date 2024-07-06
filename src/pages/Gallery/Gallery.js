import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import galleryBg from "../../data/assets/background/gallary-bh.jpg";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import media from "../../data/gallery.json";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import SectionHeading from "../../components/Headings/SectionHeading";
import CurlyTitles from "../../components/Headings/CurlyTitles";
import "./Gallery.scss";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [index, setIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <div className="gallery-section">
      <SectionHeading sectionName={"Gallery"} sectionBg={galleryBg} />

      <div className="gallery-bg py-10 px-4 mt-[-110px] ">
        <div className="flex flex-col justify-center text-center mb-8 mt-[-10px]">
          <CurlyTitles titleName={"Don't Panic Go Organic"} />
          <div className="curly-subTitle">
            <h1>Watch Our Portfolio</h1>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-offset="10">
          <PhotoAlbum
            style={{ backgroundColor: "green" }}
            photos={media?.images}
            layout="rows"
            spacing={20}
            columns={3}
            rows={2}
            targetRowHeight={400}
            // targetColumnHeight={2}
            onClick={({ index }) => setIndex(index)}
          />
        </div>
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

      <Footer />
    </div>
  );
}
