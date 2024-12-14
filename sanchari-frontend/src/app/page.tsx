"use client";
import Image from "next/image";
import { GiPalmTree } from "react-icons/gi";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/bcg-landscape.avif"
            alt="Beautiful landscape"
            fill
            className="object-cover object-[100%_68%]"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4 inline-flex items-center space-x-2">
              <span>Welcome to </span>
              <GiPalmTree className="h-8 w-auto sm:h-10 pl-6 text-green-600" />
              <span>Sanchari</span>
            </h1>

            <p className="text-xl mb-8">
              Discover the beauty of our destination
            </p>
            <button>Start Your Adventure</button>
          </div>
        </section>

        {/* Featured Attractions */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
            Featured Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Beautiful Beaches",
                image: "/beach-image.jpg",
              },
              {
                title: "Historic Landmarks",
                image: "/historic-landmark.jpg",
              },
              {
                title: "Local Cuisine",
                image: "/local-cuisine.jpg",
              },
            ].map((attraction, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {attraction.title}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="mt-4 text-zinc-400">Learn More...</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
