export default function BookingBar() {
  return (
    <section className="bg-gradient-to-r from-[#081C3A] to-[#10284D] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <p className="uppercase tracking-[6px] text-yellow-400 mb-3">
              Book Your Stay
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Experience Luxury Like Never Before
            </h2>

            <p className="text-gray-300 mt-5 text-lg leading-8">
              Enjoy a private luxury villa with a swimming pool, elegant
              interiors, breathtaking Aravalli views and premium hospitality.
            </p>

          </div>

          <a
            href="https://wa.me/918619985400"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/30"
          >
            Check Availability
          </a>

        </div>

      </div>

    </section>
  );
}