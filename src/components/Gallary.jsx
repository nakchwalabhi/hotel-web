const Gallary = ({ src, title, description }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="h-60 overflow-hidden sm:h-72 lg:h-64">
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="font-['Times_New_Roman'] text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
};

export default Gallary;
