import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProductDetails = () => {
  const titleRef = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const ss = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(left.current, {
      x: -200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(right.current, {
      x: 200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(ss.current, {
      y: 200,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <div className="project-detail">
      <div ref={titleRef} className="title">
        <h1>Social Media App</h1>
        <img src="/github-mark-white.svg" alt="" height="50" />
      </div>

      <div className="sub-title">
        <h3>Kotlin, Instagam clone</h3>
        <div>
          <img src="/Kotlin.svg" alt="" height="50" />
          <img src="/Android.svg" alt="" height="50" />
        </div>
      </div>
      <div className="vdo"></div>
      <div className="overview">
        <div className="overview-video-grid">
          <iframe
            ref={left}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QS28nnpzoFY?si=zfhN84Qv6qalv_J-"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; muted; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div ref={right} className="right">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              dolorem nihil fugit minima, unde accusantium quos optio tempora
              fuga neque aspernatur quia nisi at itaque eum necessitatibus,
              harum accusamus molestias. Iusto, deleniti optio vitae, similique
              perspiciatis, neque maiores dolor dignissimos autem molestias
              delectus harum vel necessitatibus aliquam porro! Veritatis
              dignissimos cupiditate assumenda sit. Corrupti nam aliquid magni
              ipsam atque iusto. Fugit, non optio cum, assumenda voluptatibus
              eius architecto quibusdam earum quasi enim suscipit repellendus
              fugiat eveniet excepturi explicabo quam nam accusantium facilis.
            </p>
            <br />
            <div className="feature">
              <h4>Features</h4>
              <h5>Photo Sharing</h5>
              <h5>Realtime chat</h5>
              <h5>Like/ comment on posts</h5>
              <h5>share and view stories which gets del in 24 hrs</h5>
              <h5>edit profile info including profile image</h5>
              <h5>Search profiles</h5>
              <h5>Add / remove Followings and followers</h5>
            </div>
          </div>
        </div>
      </div>
      <div ref={ss} className="ss-section">
        <h2>Screenshots</h2>

        <div className="screenshots-imgs">
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668f39562232881730a5a1d7_photo1-p-800.jpg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668f3a76996eb53c8a43ae7d_photo2-p-800.jpg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668f3a7653e5e2203087efa6_photo4-p-800.jpg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668f3a76acc37f6a5b526957_photo5-p-800.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
