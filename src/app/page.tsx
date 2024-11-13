import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import LocationTab from "@/components/LocationTab";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start mt-8">
        <div className="card-location flex flex-row">
          <div className="relative rounded-full w-[168px] h-[168px]">
            <Image
              className="dark:invert rounded-full"
              src="https://i.travelapi.com/lodging/10000000/9300000/9296600/9296574/cbfc3f48_z.jpg"
              alt="Next.js logo"
              fill
              priority
            />
          </div>
          <div className="location-information">
            <h4>Fairmont Jakarta</h4>
            <p>Hotel</p>
            <p>
              Jl. Asia Afrika No.8, Gelora Bung Karno, Jakarta, Indonesia 10270
            </p>
          </div>
        </div>
        <LocationTab />
      </main>
      <footer className="w-full bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-row justify-between">
            <p>
              <span>©</span>Wisata App
            </p>
            <p>v4.10</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
