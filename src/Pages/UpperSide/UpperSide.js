import React from 'react';
import img1 from '../../Images/image-1.PNG';
import { FaPlayCircle } from "react-icons/fa";
import { BiChevronRightCircle } from "react-icons/bi";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";
import './UpperSide.css';
const UpperSide = () => {
      
    return (
        <div>
              <div className='mt-5 ml-20 gap-36' id='container'>
                <div className='ml-10 w-96'>
                    <h1>Healthy in side</h1>
                    <h1><span >fresh</span> out side</h1>
                    <p className='text-justify'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                    <div className='d-flex'>
                        <button className="btn btn-outline btn-primary mr-8 d-flex"><span className='mr-7'>Get Started </span> <span>
                        </span><BiChevronRightCircle></BiChevronRightCircle> </button>
                        <button className="btn btn-outline btn-success bg-white text-blue-900 d-flex"><span className='mr-5'>Learn more</span><FaPlayCircle></FaPlayCircle><span>
                        </span></button>
                    </div>
                    <h6 className='font-medium mt-3'>Brands</h6>
                    <div>
                    <span className='d-flex icon gap-10 -mt-1' style={{ fontSize: '80px', color: 'gray' }}>
                    <SiNike></SiNike><SiAdidas></SiAdidas><SiPuma></SiPuma> <SiReebok></SiReebok>
                    </span>
                    </div>
                </div>
                <div className='ml-4' id='container-2'>
            
                    <img src={img1}></img>
                </div>  
            </div>
           
        </div>
    );
};

export default UpperSide;