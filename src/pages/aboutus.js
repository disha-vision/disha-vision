import "../styles/aboutus.css";
import { IoIosPlayCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState, useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import about_1 from "../assets/about_us_man.png";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

const sliderData = [
  {
    id: 1,
    type: "video",
    src: video1,
    alt: "Video Thumbnail",
  },
  {
    id: 2,
    type: "video",
    src: video2,
    alt: "Video Thumbnail 2",
  },
];

export default function ProfileSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  const handlePlayVideo = (index) => {
    setIsPlaying(true);
    swiperRef.current?.autoplay.stop();
    videoRefs.current[index].play();
  };

  const handlePauseVideo = (index) => {
    setIsPlaying(false);
    swiperRef.current?.autoplay.start();
    videoRefs.current[index].pause();
  };

  return (
    <section className="container">
      <h2 className="heading">The visionary behind every structure</h2>

      {/* <div className="grid">
        <div className="image-container">
          <img
            src={about_1}
            alt="Chief Architect"
            fill
            className="image"
            sizes="(max-width: 768px) 100vw, 30vw"
            priority
          />
        </div>
        <div className="content-parent">
          <blockquote className="quote">
            "At our firm, we believe architecture is more than designing
            buildings— it's about shaping experiences and crafting spaces that
            inspire."
          </blockquote>
          <p className="description">
            A passionate team of dedicated professionals transforming ideas into
            inspiring spaces. A passionate team of dedicated professionals
            transforming ideas into inspiring spaces. A passionate team of
            dedicated professionals transforming ideas into inspiring spaces.
          </p>
          <div className="author">
            <h3 className="author-name">Akash Mohta</h3>
            <p className="author-info">Chief Architect: 24 yrs of experience</p>
          </div>
        </div>
      </div> */}

      <div className="my-container">
        <div className="img-container">
          <img src={about_1} alt="Image" fill priority className="author-img" />
        </div>
        <div className="content-container">
          <p className="content-header">
            "At our firm, we believe architecture is more than designing
            buildings— it's about shaping experiences and crafting spaces that
            inspire."
          </p>
          <p className="content-description">
            A passionate team of dedicated professionals transforming ideas into
            inspiring spaces. A passionate team of dedicated professionals
            transforming ideas into inspiring spaces. A passionate team of
            dedicated professionals transforming ideas into inspiring spaces.
          </p>
          <div className="content-footer-container">
            <p className="content-footer-text1">Akash Mohta</p>
            <p className="content-footer-text2">
              Chief Architect: 24 yrs of experience
            </p>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={slide?.id}>
            <div className="video-thumbnail">
              {slide.type === "video" ? (
                <video
                  className="h-full radius-10px"
                  ref={(el) => (videoRefs.current[index] = el)}
                  onPause={() => handlePauseVideo(index)}
                  onEnded={() => handlePauseVideo(index)}
                  controls
                  onClick={(e) => e.preventDefault()}
                  // style={{ pointerEvents: "none" }}
                >
                  <source src={slide?.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide?.src}
                  alt={slide?.alt}
                  className="thumbnail-image"
                />
              )}
              {!isPlaying && slide.type === "video" && (
                <div className="play-button">
                  <button
                    className="play-btn"
                    onClick={() => handlePlayVideo(index)}
                  >
                    <IoIosPlayCircle className="play-video-icon" />
                    <p className="play-video-text">Play video</p>
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
