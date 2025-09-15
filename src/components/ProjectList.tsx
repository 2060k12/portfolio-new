import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectList = () => {
  const navigate = useNavigate();
  return (
    <div className="page4">
      <div className="project-grid">
        {/* <!-- project1 --> */}
        <div className="mobile-ss-group">
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbcff8eaf014dbcc56081_Screenshot_20240711_210658-p-500.png"
            alt=""
            onClick={() => navigate("/project/1")}
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fc62dff7276e1b7bb82f1_Screenshot_20240711_213428-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbc372d0090ff946b46b6_Screenshot_20240711_210038-p-500.png"
            alt=""
          />
        </div>
        {/* <!-- project2 --> */}
        <div className="mobile-ss-group">
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbcff8eaf014dbcc56081_Screenshot_20240711_210658-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fc62dff7276e1b7bb82f1_Screenshot_20240711_213428-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbc372d0090ff946b46b6_Screenshot_20240711_210038-p-500.png"
            alt=""
          />
        </div>
        {/* <!-- project3 --> */}
        <div className="mobile-ss-group">
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbcff8eaf014dbcc56081_Screenshot_20240711_210658-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fc62dff7276e1b7bb82f1_Screenshot_20240711_213428-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fbc372d0090ff946b46b6_Screenshot_20240711_210038-p-500.png"
            alt=""
          />
        </div>

        {/* <!-- project4 --> */}
        <div className="desktok-ss">
          <img
            src="https://cdn.prod.website-files.com/668f2a25f4beafa35bba213a/668fc9ba752903a8eb2e2927_Screenshot%202024-07-11%20at%2010.01.35%E2%80%AFPM.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
