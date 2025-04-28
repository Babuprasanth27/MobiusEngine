
const features = [
    {
        id: 1,
        icon: (
          <img
            src={('src/assets/Asset 3 1.png')}
            alt="Check Icon"
            className="w-10 h-10 object-contain"
          />
        ),
        title: "Tried, Tested, Trusted",
        description:
          "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
      },
      
  {
    id: 2,
    icon:  (
        <img
          src={('src/assets/Profile 1.png')}
          alt="Check Icon"
          className="w-10 h-10 object-contain"
        />
      ),
    title: "Real People, Real Help",
    description:
      "A hands-on team that actually cares — guiding you through every twist in your career path.",
  },
  {
    id: 3,
    icon:  (
        <img
          src={('src/assets/Star 1.png')}
          alt="Check Icon"
          className="w-10 h-10 object-contain"
        />
      ),
    title: "Beat the Line",
    description:
      "We search, shortlist, and apply for you, so your name shows up first — every single day.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto text-center bg-gray-50 p-5">
        <h2 className="text-2xl font-semibold text-[#022183] mb-12 text-start w-[492px] h-[42px] top-[2626px] left-[314px]" style={{fontFamily:'DM Sans', fontWeight: '500', fontSize: '40px', lineHeight:'104%', letterSpacing:'-4%'}}>
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl border border-[#022183] w-80 flex flex-col items-start text-center hover:shadow-lg transition"
            >
              <div className="mb-6 flex justify-start items-start"  >{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4" style={{fontFamily:'DM Sans', fontWeight: '600', fontSize: '24px', lineHeight:'40.79px', letterSpacing:'-4%'}}>{feature.title}</h3>
              <p className="text-gray-600 text-sm "style={{color:'#022183',fontFamily:'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight:'104%', letterSpacing:'-2%'}}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
