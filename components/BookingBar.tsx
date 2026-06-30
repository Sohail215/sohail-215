export default function BookingBar() {
  return (
    <section className="bg-yellow-500 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-2xl font-bold text-black">
            Book Your Luxury Stay
          </h2>

          <p className="text-black">
            Private Pool • 3 Bedrooms • Mountain View
          </p>
        </div>

        <a
          href="https://wa.me/918619985400"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-900 transition"
        >
          Reserve Now
        </a>

      </div>
    </section>
  );
}