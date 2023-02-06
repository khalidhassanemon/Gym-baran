import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import img3 from "../../Images/image-4.PNG";
import './Last.css';
const Last = () => {
  return (
    <div className="mt-10 ml-28">
      <section className="d-flex  gap-28" id='cont-26'>
        <div id="cont-27">
          <h1 className="mt-6" >
            Daily morning <br></br> workout in home
          </h1>
          <p className="text-justify" id="cont-24">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button className="btn btn-active  btn-primary mr-8 d-flex mt-7">
            Get Started
            <span className="ml-7">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
        </div>
        <div className="mt-6" style={{width:'390px'}} id="cont-28">
          <img src={img3}></img>
        </div>
      </section>
    </div>
  );
};

export default Last;
