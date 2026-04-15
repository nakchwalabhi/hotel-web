const homeData = [
  {
    title: "Luxury redefined",
    description:
      "Our rooms are designed for comfort and calm, so every stay feels effortless from check-in to check-out.",
    img: "/home-room.png",
  },
  {
    title: "Leave your worries in the sand",
    description:
      "Wake up to ocean views, curated dining, and warm hospitality that turns every getaway into a lasting memory.",
    img: "/home-beach.png",
  },
];

const Home = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center text-slate-900">
        <h2 className="font-['Times_New_Roman'] text-3xl font-bold sm:text-4xl">A refined escape built around you</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
          All room types include complementary breakfast, premium in-room amenities, and concierge support throughout your stay.
        </p>
      </div>

      <div className="space-y-10">
        {homeData.map((item, idx) => (
          <article
            key={item.title}
            className="grid items-center gap-6 overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-lg md:grid-cols-2 md:p-8"
          >
            <div className={`space-y-4 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <h3 className="font-['Times_New_Roman'] text-3xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{item.description}</p>
              <button className="rounded-lg bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:-translate-y-0.5">
                Explore
              </button>
            </div>
            <div className={`overflow-hidden rounded-2xl ${idx % 2 === 1 ? "md:order-1" : ""}`}>
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-80"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
