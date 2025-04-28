
const testimonials = [
  {
    id: 1,
    name: "Holly",
    role: "senior executive",
    description: "who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 2,
    name: "Holly",
    role: "senior executive",
    description: "who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 3,
    name: "Holly",
    role: "senior executive",
    description: "who got over 10 job interviews and an offer she accepted",
  },
];

export default function Testimonial() {
  return (
    <div>
         <h2 className="flex md:ml-[10rem] mt-[5rem] flex-col w-[492px] h-[42px] top-[2626px] left-[314px] " style={{ color: '#0649E7' ,fontFamily:'DM Sans', fontWeight: '500' , fontSize: '40px' , lineHeight: '104%' , letterSpacing : '-4%'}}>
  What our clients have to say
</h2>
   
    <div className="mt-5">

   
    <div className="py-16 px-4 flex flex-col items-center ">
    


      <div className="flex flex-wrap justify-center gap-8 mb-12 ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-72 rounded-2xl shadow-md  overflow-hidden flex flex-col items-center bg-[#0649E7] border-2 border-blue-800" 
          >
            <div className="flex items-center justify-center bg-gray-100 w-full h-48 relative " style={{borderRadius: '0rem 0rem 1rem 1rem'}}>
              <button className="bg-[#0649E7] p-3 rounded-full text-white">
                <svg
                  className="w-6 h-6 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                </svg>
              </button>
            </div>
            <div className="bg-[#0649E7] text-white w-full p-4 relative mb-10">
              <p className="text-sm" style={{fontFamily:'DM Sans', fontWeight: '400', fontSize: '20px', lineHeight:'104%', letterSpacing:'-2%'}}>
                {testimonial.name} is a{" "}
                <span className="font-bold">{testimonial.role}</span>{" "}
                {testimonial.description}
              </p>
              <button className="absolute right-4 bg-white text-blue-600 p-2 rounded-full shadow-md">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 7l-10 10M7 7h10v10" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 ">
        <button className="px-6 py-3 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition" style={{fontFamily:'DM Sans', fontWeight: '400', fontSize: '20px', lineHeight:'104%', letterSpacing:'-2%'}}>
          More customer testimonials &rarr;
        </button>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" style={{fontFamily:'DM Sans', fontWeight: '600', fontSize: '20px', lineHeight:'104%', letterSpacing:'-2%'}}>
          Get Started &rarr;
        </button>
      </div>
    </div>  
    </div>
    </div>
  );
}
