import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container-1200">
          <section className="intro__section" id="intro">
            <div className="intro__section--grid">
              <div className="intro__section--grid-right">
                <h2>Brief Intro</h2>
                <p className="modified-large">
                  Hi, I am Nitin Das. I am currently studying
                  Computer Science and Engineering from Institute of Engineering and Rural Technology.
                </p>
                <p className="modified-large">
                  I have hands-on experience with Python, Web Developing, Blockchain and Machine Learning.
                  I also have a strong grasp over Data Structure and Algorithms, along with good Problem-Solving aptitude.
                </p>
              </div>
              <div className="intro__section--grid-left">
                <h2>Key Skills</h2>
                <div className="intro__section--grid-left-list">
                
                  <p className="modified color-blue-sec">Python</p>
                  <p className="modified color-green">HTML</p>
                  <p className="modified color-pink">CSS</p>
                  <p className="modified color-yellow">JavaScript</p>
                  <p className="modified color-green">React</p>
                  <p className="modified color-blue">Blockchain</p>
                  <p className="modified color-dark">Data Structure</p>
                  <p className="modified color-green-sec">Algorithms</p>
                  <p className="modified color-pink">Machine Learning</p>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Intro;
