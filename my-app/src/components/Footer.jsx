
import { FaLinkedin } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-white pt-10 mx-auto" style={{ color: '#0649E7', fontFamily: 'DM Sans', fontWeight: '600', fontSize: '16px', lineHeight: '104%', letterSpacing: '-4%' }}>
      <div className="max-w-auto mx-auto">
       
        <div className="flex flex-col md:justify-between items-start mb-8 ">
         
          <div className="mb-8 md:mb-0 w-[151px] h-[86.21px] top-[7211.85px] left-[103px] ml-20">
            <img
              src="/assets/Group 41.png"
              alt="MobuisEngine Logo"
              className=" mb-2  "
            />
          </div>
        <p className="border-[.2px] border-gray-500 w-[30%] ml-20 mt-8"></p>
        
          <div className="flex flex-wrap gap-[15rem] ml-20  mt-5">
          
            <div>
              <h4 className="text-blue-600 font-semibold mb-2">Address</h4>
              <p className=" text-sm leading-relaxed">
                1875 Mission St Ste 103 #450 <br />
                San Francisco, CA 94103
              </p>
            </div>

            
            <div>
              <h4 className="text-blue-600 font-semibold mb-2">Email</h4>
              <p className="text-blue-600 text-sm underline">
                finance@mobuisengine.ai
              </p>
            </div>

           
            <div>
              <h4 className="text-blue-600 font-semibold mb-2">Telephone</h4>
              <p className="text-blue-600 text-sm">650-889-6026</p>
            </div>

           
            <div>
              <h4 className="text-blue-600 font-semibold mb-2">Socials</h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="border border-blue-600 rounded-full p-2 text-blue-600 hover:bg-blue-100 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="border border-blue-600 rounded-full p-2 text-blue-600 hover:bg-blue-100 transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-blue-600 py-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
          <p className="ml-20">© 2023 Mobuisservices LLC</p>
          <div className="flex gap-6 mt-2 md:mt-0 mr-20">
            <a href="#" className="hover:underline ">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
