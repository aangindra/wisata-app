"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import get from "lodash/get";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import LocationTab from "@/components/LocationTab";
import { getProperty } from "@/services/actions/propertyActions";
import { IoStar } from "react-icons/io5";

export default function Home() {
  const { data: locationDetail = {} } = useQuery({
    queryKey: ["getProperty"],
    queryFn: async ({ queryKey }) => {
      const [, params] = queryKey;
      const result = await getProperty({
        id: "9000248394",
        include: "room",
      });

      return result;
    },
  });

  const ratings = useMemo(() => {
    const totalStar = get(locationDetail, "catalog.star_rating", 1);
    return Array.from({ length: totalStar }, (_, index) => {
      if (index < locationDetail.rating) {
        return <IoStar key={index} color="#ff9800" />;
      }

      return <IoStar key={index} color="#ff9800" />;
    });
  }, [locationDetail]);

  return (
    <div className="bg-white">
      <Header />
      <main className="container mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start pt-16">
        <div className="card-location flex flex-row gap-12 pt-4">
          <div className="relative rounded-full w-[168px] h-[168px]">
            <Image
              className="dark:invert rounded-full"
              src={get(
                locationDetail,
                "catalog.hero_image_url.md",
                "/next.svg"
              )}
              alt={locationDetail.name || "Hero Image"}
              fill
              priority
            />
          </div>
          <div className="location-information">
            <div className="title flex flex-row gap-2">
              <h4>{locationDetail.name}</h4>
              {ratings}
            </div>
            <p>{locationDetail.type}</p>
            <p>{locationDetail.address_line}</p>
          </div>
        </div>
        <LocationTab />
      </main>
      <footer className="w-full py-5 bg-gray-100">
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
