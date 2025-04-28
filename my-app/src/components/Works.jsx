
const steps = [
  {
    number: 1,
    title: 'Submit Intake Form',
  },
  {
    number: 2,
    title: 'We do the search and curation for list of jobs',
  },
  {
    number: 3,
    title: 'You approve, we do the tedious part (applying)',
  },
  {
    number: 4,
    title: 'You get the interviews',
  },
];

const Works = () => {
  return (

    <div className="bg-white py-12 px-0 sm:px-6 lg:px-40 ">
      <h2 className="flex flex-col w-[251px] h-[42px] top-[931px] left-[310px] " style={{ color: '#0649E7' ,fontFamily:'DM Sans', fontWeight: '500' , fontSize: '40px' , lineHeight: '104%' , letterSpacing : '-4%'}} >
        How we work?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center mt-5">
            <div className="border-[1.51px] border-[#022183] rounded-full w-[81.65px] h-[81.65px] top-[1081px] left-[310px]  flex items-center justify-center mb-2 " style={{fontFamily: 'DM Sans', fontWeight: '400', fontSize: '56px' , lineHeight: '104%' , letterSpacing: '-2%' , alignItems:'center'} }>
              {step.number}
            </div>
            <div className="border-t-2 border-blue-600 w-24 mb-4"></div>
            <p className="mt-2"style={{color:'#0649E7' ,fontFamily: 'DM Sans', fontWeight: '500', fontSize: '20px' , lineHeight: '104%' , letterSpacing: '-2%' , alignItems:'center'} }>
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
