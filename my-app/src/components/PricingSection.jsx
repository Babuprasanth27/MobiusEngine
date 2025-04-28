
const plans = [
    {
        id: 1,
        title: "April Promo",
        price: "$35",
        period: "/week",
        features: [
            "Curated jobs from 1M+ listings, refreshed every 48 hours",
            "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
            "Need more? Add extra apps for just $1.5 each",
            "Your own dedicated application analyst",
            "Personalized with up to 10 filters & 5 job titles",
        ],
    },
    {
        id: 2,
        title: "Starter",
        price: "$50",
        period: "/week",
        popular: true,
        features: [
            "All the perks of the Promo Plan, plus:",
            "Resume review & story-focused feedback",
            "Dedicated search specialist",
            "Up to 50 job apps/week",
            "Extra apps at $15 each",
            "Analyst support within 6 hours (SLA/PST hours)",
        ],
    },
    {
        id: 3,
        title: "Plus",
        price: "$100",
        period: "/week",
        features: [
            "Everything in Starter, with more muscle:",
            "Up to 75 apps/week",
            "Apply to 15 job titles",
            "Analyst + full application team on Pacific hours",
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className=" md:ml-[3.5rem]  mb-12 flex items-start" style={{ color: '#0649E7', fontFamily: 'DM Sans', fontWeight: '600', fontSize: '40px', lineHeight: '104%', letterSpacing: '-4%' }}>
                    Job Application Service Plans
                </h2>


                <div className="flex flex-wrap justify-center gap-8 mb-16 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="w-80 bg-white border border-[#0649E7] rounded-2xl shadow-sm p-8 flex flex-col relative hover:shadow-lg transition"
                        >
                            
                            {plan.popular && (
                                <span
                                    className="absolute top-4 right-4 bg-blue-100 border border-[#0649E7] text-[#0649E7] text-xs font-semibold px-3 py-1 rounded-full"
                                    style={{ fontFamily: 'DM Sans' }}
                                >
                                    Popular
                                </span>
                            )}

                          
                            <h3
                                className="text-xl font-semibold text-blue-700 mb-4"
                                style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: '600',
                                    fontSize: '32px',
                                    lineHeight: '40.76px',
                                    letterSpacing: '-4%',
                                }}
                            >
                                {plan.title}
                            </h3>

                          
                            <p
                                className="text-[#0649E7]"
                                style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: '700',
                                    fontSize: '26px',
                                    lineHeight: '40.79px',
                                    letterSpacing: '-4%',
                                }}
                            >
                                {plan.price}
                                <span className="text-base font-normal text-blue-700">{plan.period}</span>
                            </p>

                         
                            <ul className="text-sm text-gray-600 text-left mt-6 space-y-4">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green-500 mt-1 ">✅</span>
                                        <span
                                            style={{
                                                color: '#0649E7',
                                                fontFamily: 'DM Sans',
                                                fontWeight: '500',
                                                fontSize: '18px',
                                                lineHeight: '104%',
                                                letterSpacing: '-4%',
                                                marginBottom:'1rem'
                                            }}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                           
                            <button
                                className="mt-auto px-6 py-3 bg-[#0649E7] text-white rounded-full hover:bg-blue-700 transition w-[211px] h-[62px] items-center"
                                style={{
                                    fontFamily: 'DM Sans',
                                    fontWeight: '600',
                                    fontSize: '20px',
                                    lineHeight: '104%',
                                    letterSpacing: '-2%',
                                }}
                            >
                                Get Started →
                            </button>
                        </div>
                    ))}
                </div>


               
                <div className="bg-[#0649E7] rounded-2xl text-white p-8 flex flex-col md:flex-row justify-between items-center ">
                    <div className="mb-6 md:mb-0 md:text-left text-center ">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '600', fontSize: '32px', lineHeight: '40.79px', letterSpacing: '-4%' }}>Advance</h3>
                        <p className="text-sm mb-4" style={{ color: '##fefefe', fontFamily: 'DM Sans', fontWeight: '600', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>Top-tier support for serious job hunters:</p>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>
                                <span className="text-green-300">✅</span> Everything in Plus
                            </li>
                            <li className="flex items-center gap-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>
                                <span className="text-green-300">✅</span> Custom Resumes & Cover Letters
                            </li>
                            <li className="flex items-center gap-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>
                                <span className="text-green-300">✅</span> 20 fully customized applications/week
                            </li>
                            <li className="flex items-center gap-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>
                                <span className="text-green-300">✅</span> Help with complex job searches
                            </li>
                            <li className="flex items-center gap-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '400', fontSize: '18px', lineHeight: '104%', letterSpacing: '-4%' }}>
                                <span className="text-green-300">✅</span> Access to senior resume experts, Founder & Exec Coaches
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <p className="mb-2" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '700', fontSize: '56px', lineHeight: '40.76px', letterSpacing: '-4%' }}>$150</p>
                        <p className="text-sm mb-6" style={{ color: '#fefefe', fontFamily: 'DM Sans', fontWeight: '700', fontSize: '26px', lineHeight: '40.76px', letterSpacing: '-4%' }}>/week</p>
                        <button className="px-6 py-3 bg-white text-[#0649E7] font-semibold rounded-full hover:bg-gray-100 transition" style={{  fontFamily: 'DM Sans', fontWeight: '600', fontSize: '20px', lineHeight: '104%', letterSpacing: '-2%' }}>
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
