import React from 'react';
import AboutUs from './AboutUs';
import bg from "../../public/assets/0c946621b5f3753efb360ac7b231692b4a163689.png"
import { Link } from 'react-scroll';
const Hero = () => {
    return (

        <div className="min-h-screen flex flex-col relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/0c946621b5f3753efb360ac7b231692b4a163689.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}


        >

            <nav className="w-full flex justify-between items-center px-8 py-4">
                <div className="flex items-center space-x-2">
                    <img src="/assets/Group 41.png" alt="Logo" className=" top-[109px] w-[250.78px] h-[49.92px] left-[113px] object-contain" />
                   
                </div>

                <ul className="hidden md:flex items-center justify-center  text-[#FEFEFE] font-medium w-[800px] h-[25px] top-[57px] left-[523px]">
                    <li className="hover:text-green-400 cursor-pointer  w-[130px] h-[25px] top-[57px] left-[936.09px]" style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>Home</li>
                    <li className="hover:text-green-400 cursor-pointer w-[130px] h-[25px] top-[57px] left-[936.09px] " style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>  <Link to="AboutUs" smooth={true} duration={500}>
                        About Us
                    </Link></li>
                    <li className="hover:text-green-400 cursor-pointer w-[130px] h-[25px] top-[57px] left-[936.09px] " style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>Plans</li>
                    <li className="hover:text-green-400 cursor-pointer w-[130px] h-[25px] top-[57px] left-[936.09px] " style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>Testimonials</li>
                    <li className="hover:text-green-400 cursor-pointer w-[130px] h-[25px] top-[57px] left-[936.09px] ml-[3rem]" style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>Privacy Policy</li>
                    <li className="hover:text-green-400 cursor-pointer w-[130px] h-[25px] top-[57px] left-[936.09px] ml-[3rem]" style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px', lineHeight: '38.53px', letterSpacing: '-5%' }}>More ▾</li>
                </ul>

                <button className="bg-white text-[#022183] rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition" style={{ fontFamily: 'DM Sans', fontWeight: '600', fontSize: '26.04px', lineHeight: '38.53px', letterSpacing: '-7%' }}>
                    Get Started
                </button>


            </nav>


            {/* <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 gap-10">
                
                <div className="text-white max-w-xl">
                   
                     <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Land job interviews <br />
                        <span className="text-yellow-400">10x</span> faster
                    </h1> 
                    
                    <p className="text-gray-200 mb-6">
                        Custom-built resumes that match your goals, keywords, and recruiter expectations.
                    </p>
                    <button className="bg-white text-blue-700 rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition">
                        Get Started →
                    </button>
                </div>

               
                <div className="relative">
                    <img
                        src="/ebook.png"
                        alt="Hiring Trends"
                        className="w-72 md:w-96 object-contain"
                    />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <img src="/ebook_icon.png" alt="Ebook Icon" className="w-8 h-8" />
                            </div>
                            <p className="text-white text-sm mt-2">Download Free E-Book</p>
                        </div>
                    </div>
                </div>
            </div>  */}


            <div className=" flex-1 flex flex-col md:flex-row items-center justify-center  gap-10  h-[444.71px] top-[267px] left-[303px] text-[#FEFEFE] border: 0.97px solid #FEFEFE ">

                <div className="w-[776px] h-[360.22px] top-[275.3px] left-[303px] rounded-r-[31.5px]">

                    <h1 className="text-[#FEFEFE] w-[776px] h-[166px] top-[275.3px] left-[303px]" style={{ fontFamily: 'Sora', fontWeight: '600', fontSize: '80px', lineHeight: '104%', letterSpacing: '-2%' }}>
                        Land job interviews <br />
                        <span className="text-[#0649E7]">10x</span> faster
                    </h1>

                    <p className="text-[#FEFEFE] w-[613px] h-[60px] top-[483px] left-[311px] ml-2" style={{ fontFamily: 'DM Sans', fontWeight: '400', fontSize: '20px', lineHeight: '104%', letterSpacing: '-2%' }}>
                        Custom-built resumes that match your goals, keywords, and recruiter expectations.
                    </p>
                    <button className="bg-white text-blue-700 rounded-full px-6 py-3 font-semibold hover:bg-gray-200 transition w-[215.69px] h-[50.72px] top-[567.81px] left-[303px] radius-[33.86] " style={{ fontFamily: 'DM Dans', fontWeight: '500', fontSize: '21.08px' }}>
                        Get Started →
                    </button>
                </div>


                <div className="relative text-[#FEFEFE] w-[348px] h-[444.71px]">

                    <img
                        src="/assets/d846eedc4b275ac4f5079be1c02fd04e78826002.png"
                        alt="Hiring Trends"
                        className="w-[301.2px] h-[389.99px] top-[267px] left-[1259px]"
                    />


                    <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-center">
                        <div className="relative flex flex-col items-center ml-[15rem] mb-[2rem]">


                            <div className="absolute w-[125.54px] h-[125.54px] top-[570.28px] left-[1486.46px] rounded-full blur-2xl"></div>


                            <div className=" rounded-full shadow-lg flex items-center justify-center w-[80px] h-[80px] top-[600.42px] left-[1515.63px] border bg-[#D9D9D94D]  opacity-[13.61]">
                                <span style={{ fontWeight: "500", fontSize: "45.24px", lineHeight: "10%", letterSpacing: '-5%', marginBottom: '.5rem' }}>📖</span>
                            </div>


                            {/* <div className="relative bg-white rounded-full w-[18px] h-[18px] flex items-center justify-center shadow-md">
  <span className="absolute top-[0px] bottom-[1rem] left-[4px] bg-white text-sm z-10 font-bold" >↙</span>
</div> */}

                        </div>
                        <p className=" ml-56w-[171px] h-[17px] top-[694.71px] left-[1333px]" style={{ fontFamily: 'DM Sans', fontWeight: '500', fontSize: '17.5px', lineHeight: '100%', letterSpacing: '-5%' }}>Download Free E-Book</p>
                    </div>
                </div>


            </div>



        </div>


    );
};

export default Hero;
