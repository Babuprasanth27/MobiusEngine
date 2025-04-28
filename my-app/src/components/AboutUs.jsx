
const AboutUs = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center py-12 px-4  
      bg-gradient-to-b from-[#020024] via-[#08084a] to-[#132e88]" id = "AboutUs"
        >
            <h2 className="lg:px-4 md:ml-[-60rem] mb-20 flex flex-col w-[251px] h-[42px] top-[931px] " style={{ color: '#fff', fontFamily: 'DM Sans', fontWeight: '500', fontSize: '40px', lineHeight: '104%', letterSpacing: '-4%' }} >
                About Us
            </h2>
    
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full mb-16">
              
                <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl ">
                   
                    <div className="relative">
                        <img
                            src="/assets/abcdb8cfe59727b23f8e75f55fc50cd36fbe67ac.png" 
                            alt="Nicole"
                            className="w-[42rem] h-[15rem]  rounded-full border-4 border-white bg-white"
                        />
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className="w-[5rem] h-[5rem] border-2 border-white  bg-[#d9d9d928]  opacity-[13.61]  backdrop-blur-lg p-4 rounded-full flex items-center justify-center absolute bottom-0 right-0 shadow-md ">
                                <img src="/assets/Shape.png" className="w-[31.32px] h-[29.9px] top-[1883.35px] left-[705.71px]"></img>
                            </div>

                        </a>
                    </div>
                </div>


                <div className="text-white top-[1721px] left-[876.41px]">

                    <p className="mt-2 " style={{ fontWeight: "500", fontSize: "17.24px", lineHeight: "115%", letterSpacing: '0%', fontFamily: 'DM Sans' }}>
                        <span className='font-bold'> Ashwin </span> is the founder of mobiusengine.ai. He is an accomplished senior executive
                        with over 20 years of experience in cloud infrastructure and financial services.
                        With over 2 decades of experience at Google and JP Morgan, Ashwin held various
                        product and GTM roles. Ashwin is an MBA holder from Yale University.
                    </p>
                    <p className="mt-2 text-sm" style={{ fontWeight: "500", fontSize: "17.24px", lineHeight: "115%", letterSpacing: '0%', fontFamily: 'DM Sans' }}>
                        Ashwin’s vision with Mobius is to give job seekers a significant advantage in
                        securing the roles of their dreams.
                    </p>
                </div>
            </div>

            
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full mb-16">
              
                <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl ">
                  
                    <div className="relative">
                        <img
                            src="/assets/7dcf99fa2301e245f611001fe0e067a86dbcc88c.png" 
                            alt="Nicole"
                            className="w-[42rem] h-[15rem]  rounded-full border-4 border-white bg-white"
                        />
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <div className="w-[5rem] h-[5rem] border-2 border-white  bg-[#d9d9d928]  opacity-[13.61]  backdrop-blur-lg p-4 rounded-full flex items-center justify-center absolute bottom-0 right-0 shadow-md ">
                                <img src="/assets/Shape.png" className="w-[31.32px] h-[29.9px] top-[1883.35px] left-[705.71px]"></img>
                            </div>

                        </a>
                    </div>
                </div>


                <div className="text-white top-[1721px] left-[876.41px]">

                    <p className="mt-2 " style={{ fontWeight: "500", fontSize: "17.24px", lineHeight: "115%", letterSpacing: '0%', fontFamily: 'DM Sans' }}>
                        <span className='font-bold'> Nicole</span> is an Executive coach at Mobius specializing in resume builds and career advisory.
                        
                    </p>
                    <p className="mt-2 text-sm" style={{ fontWeight: "500", fontSize: "17.24px", lineHeight: "115%", letterSpacing: '0%', fontFamily: 'DM Sans' }}>

                        With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
                    </p>
                </div>
            </div>

           
            <div className="text-white mt-1 text-sm flex flex-col ">
                <a href="#" className="hover:underline" style={{fontWeight:"500", fontSize:"17.24px", lineHeight:"115%" , letterSpacing: '0%', fontFamily:'DM Sans'}}>Learn more about our Board of Advisors ↗</a>
                <a href="#" className="hover:underline" style={{fontWeight:"500", fontSize:"17.24px", lineHeight:"115%" , letterSpacing: '0%', fontFamily:'DM Sans'}}>Follow us on our LinkedIn page ↗</a>
            </div>
        </div>
    );
};

export default AboutUs;
