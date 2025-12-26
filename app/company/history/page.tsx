const historyData = [
  {
    year: "2021",
    events: [{ month: "March 2020", text: "PAPERETTE™ applied to Hyundai Motor Company's IONIQ5 mass production" }],
  },
  {
    year: "2020",
    events: [{ month: "May 2020", text: "MILIVET Business Partnership Agreement" }],
  },
  {
    year: "2019",
    events: [
      { month: "May 2019", text: "Launch of new material PAPERETTE™" },
      { month: "March 2019", text: "Fassler domestic distributor agreement" },
      { month: "February 2019", text: "DuPont Partnership Agreement" },
      { month: "January 2019", text: "Signed a domestic distributorship agreement with Kuhl Barra™" },
    ],
  },
  {
    year: "2018",
    events: [
      { month: "December 2018", text: "The Bio You Company Wins the Million Dollar Export Tower Award" },
      { month: "2018-11", text: "BYC Mall launch" },
      {
        month: "2018-10",
        text: "Sponsorship of the 2018 KCBL Celebrity Basketball Tournament Norenta with NGO Good People",
      },
      { month: "2018-10", text: "NGO Good People Sponsors the 2018 Celebrity Charity Bowling Tournament Norenta" },
      { month: "September 2018", text: "Skinproctor China trademark registration" },
      { month: "September 2018", text: "The Bio You Company and Tag By Company Sign Influencer Content Marketing MOU" },
      { month: "July 2018", text: "Participating in the 2018 Thailand Beauty Exhibition" },
      {
        month: "May 2018",
        text: "Korea Economic TV and The Bio You Company signed an operating contract for the video commerce shopping mall 'SHOPTEN mall.'",
      },
    ],
  },
  {
    year: "2017",
    events: [
      { month: "2017-12", text: "Launch of our own brand, Norenta" },
      { month: "2017-11", text: "Launch of Skinproctor skincare brand" },
      {
        month: "July 2017",
        text: "Merger with illui Co., Ltd, marks Korea's first mass-produced commercial supply of carbon fiber to Hyundai Motor Company's Genesis vehicles.",
      },
      { month: "June 2017", text: "Establishment of a new corporation after merger" },
    ],
  },
  {
    year: "2014",
    events: [
      { month: "2014-10", text: "Launch of the Linefix underwear brand" },
      { month: "July 2014", text: "Establishment of Bioyou" },
    ],
  },
]

export default function HistoryPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-[#f8f8f8]">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <span className="inline-block uppercase tracking-[0.5em] text-[10px] font-bold mb-6 text-neutral-400">
            Company / History
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-neutral-900 mb-4">Company History</h1>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-neutral-400">
            The Beginning of the Unique
          </p>
        </div>
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </section>

      {/* Timeline Section */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-32">
              {historyData.map((group, i) => (
                <div key={group.year} className="grid lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-3 lg:sticky lg:top-32">
                    <h2 className="text-7xl md:text-8xl font-serif text-neutral-100 leading-none select-none tracking-tighter">
                      {group.year}
                    </h2>
                  </div>

                  <div className="lg:col-span-9 space-y-12">
                    {group.events.map((event, j) => (
                      <div key={j} className="group flex flex-col md:flex-row gap-6 md:gap-16 items-start">
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary whitespace-nowrap pt-1">
                          {event.month}
                        </span>
                        <div className="space-y-4">
                          <p className="text-lg md:text-xl text-neutral-700 font-light leading-snug group-hover:text-neutral-900 transition-colors">
                            {event.text}
                          </p>
                          <div className="h-px w-8 bg-neutral-100 group-hover:w-24 transition-all duration-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
