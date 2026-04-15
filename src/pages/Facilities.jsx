import Gallary from "../components/Gallary";

const imgData = [
  {
    id: 1,
    src: "/gym.png",
    title: "Fitness Center",
    description: "Modern equipment and personal training support to keep your wellness routine uninterrupted.",
  },
  {
    id: 2,
    src: "/spa.png",
    title: "Signature Spa",
    description: "Relaxing treatments, aroma therapies, and tranquil spaces designed for complete rejuvenation.",
  },
  {
    id: 3,
    src: "/pool.png",
    title: "Infinity Pool",
    description: "A scenic pool deck with premium loungers, sunset views, and dedicated refreshment service.",
  },
  {
    id: 4,
    src: "/spool.png",
    title: "Private Poolside",
    description: "Quiet poolside corners perfect for long conversations and peaceful afternoon breaks.",
  },
  {
    id: 5,
    src: "/rest.png",
    title: "Fine Dining",
    description: "Handcrafted seasonal menus and curated wine pairings served in an elegant setting.",
  },
  {
    id: 6,
    src: "/laundary.png",
    title: "Premium Laundry",
    description: "Fast and professional garment care so you can travel light and stay comfortable.",
  },
];

const Facilities = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center text-slate-900">
        <h1 className="font-['Times_New_Roman'] text-4xl font-bold">Facilities</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
          We designed every facility to elevate your stay—from wellness and dining to convenience and leisure.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {imgData.map((item) => (
          <Gallary key={item.id} src={item.src} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Facilities;
