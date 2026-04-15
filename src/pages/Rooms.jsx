import { Link } from "react-router-dom";

const rooms = [
  {
    name: "Deluxe Sea View",
    image: "/home-room.png",
    price: "$299/night",
    description: "A serene room with panoramic sea views, king-size bedding, and a private lounge corner.",
  },
  {
    name: "Premier Heritage Suite",
    image: "/hotel-cover.png",
    price: "$399/night",
    description: "Elegant interiors with handcrafted décor, a spacious work area, and premium bath amenities.",
  },
  {
    name: "Royal Family Residence",
    image: "/hotel.png",
    price: "$549/night",
    description: "Two connected luxury rooms with curated services for family comfort and memorable celebrations.",
  },
];

const Rooms = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center text-slate-900">
        <h1 className="font-['Times_New_Roman'] text-4xl font-bold">Rooms & Suites</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
          Choose from thoughtfully designed rooms and suites crafted for luxury, comfort, and calm.
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-3">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-['Times_New_Roman'] text-2xl font-bold text-slate-900">{room.name}</h2>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">{room.price}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{room.description}</p>
              <Link
                to="/contact"
                className="inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
              >
                Reserve Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
