import Image from "next/image";

const rooms = [
  {
    title: "Luxury Bedroom",
    image: "/images/room1.jpeg",
    description:
      "Elegant bedroom with premium interiors and comfortable king-size bed.",
  },
  {
    title: "Premium Bedroom",
    image: "/images/room2.jpeg",
    description:
      "Modern room with stylish decor and relaxing ambience.",
  },
  {
    title: "exterior view.jpeg",
    image: "/images/exterior view.jpeg",
    description:
      "Wake up with a beautiful view of the private swimming pool.",
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="bg-[#0B0B0B] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[5px] text-center">
          Our Rooms
        </p>

        <h2 className="text-5xl font-bold text-center mt-4 mb-16">
          Stay in Luxury
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {rooms.map((room) => (            <div
              key={room.title}
              className="bg-[#151515] rounded-3xl overflow-hidden border border-white/10 hover:border-yellow-400 transition duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {room.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {room.description}
                </p>

                <a
                  href="https://wa.me/918619985400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition"
                >
                  Book Now
                </a>
              </div>
            </div>

          ))}

        </div>
      </div>
    </section>
  );
}