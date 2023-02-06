import React from "react";
import { GrYoga } from "react-icons/gr";
import { TbYoga } from "react-icons/tb";
import { IoIosBody } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import img2 from "../../Images/gym.PNG";
import './Middle.css';
const Middle = () => {
  return (
    <div>
      <div className="d-flex mt-10 ml-28 gap-64" id='container-3'>
        <div>
          <h1>Healthy in Side</h1>
          <h1>Fresh Outside</h1>
        </div>
        <div className="text-justify" id="container-4">
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home. Healthy life makes you
            more excited to live the day
          </p>
        </div>
      </div>
      <section className="bg-indigo-700 p-10 rounded-3xl ml-28 mr-28 justify-center" id="conts">
        <div className="d-flex" >
          <div >
            <button className="bg-indigo-400 rounded-xl mr-4 p-2 text-white"  style={{ fontSize: "50px" }} id='cont-9'>
                <IoIosBody></IoIosBody>
            </button>
          </div>
          <div className="font-medium text-gray-400 -mt-2 font-semibold" id="container-5">
            Get that 11 line <br></br> in 30 days
            <div className="d-flex">
              <span>
                <p className="font-thin">Learn more </p>
              </span>
              <span className="mt-1.5 pl-3 text-white" >
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </span>
            </div>
          </div>
          <div id="cont-8">
            <button
              className="bg-indigo-400 rounded-xl ml-32 mr-4"
              style={{ fontSize: "60px"}} id="cont-7"
            >
              <GrYoga></GrYoga>
            </button>
          </div>
          <div className="mr-32 text-gray-400 -mt-2 font-semibold" id="cont-6">
            14 days<br></br> shared challenge
            <div className="d-flex">
              <span>
                <p className="font-thin">Learn more</p>
              </span>
              <span className="mt-1.5 pl-3 text-white">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </span>
            </div>
          </div>
         
          <div id="cont-15">
            <button 
              className="bg-indigo-400 rounded-xl mr-4 text-white"
              style={{ fontSize: "60px", color: "black", marginLeft: "5px" }}
            
            >
              <TbYoga></TbYoga>
            </button>
          </div>


          <div className="text-gray-400 -mt-2 font-semibold" id="cont-16">
            Get flat belly <br></br> in 30 days
            <div className="d-flex">
              <span>
                <p className="font-thin">Learn more </p>
              </span>
              <span className="mt-1.5 pl-3 text-black ml-0.5">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </span>
            </div>
          </div>
       
        </div>
      </section>

      <section className="mt-16 d-flex  gap-64" id="cont-21">
        <div className="mt-10 ml-20" >
          <div className="img2">
            <img src={img2}></img>
          </div>
          <div className="w-14 ml-2 rounded-full p-2 bg-gradient-to-r from-cyan-500 to-blue-800  text-4xl text-white">
                <GiSprint></GiSprint>
              </div>
        </div>
        <div>
          <div id="cont-20">
            <h1 className="mt-24">
              Best full body <br></br>workout to loose fat
            </h1>
            <p className="text-justify">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.{" "}
            </p>
            <button className="btn btn-active  btn-primary mr-8 d-flex mt-7">
              Get Started
              <span className="ml-7">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </span>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Middle;
