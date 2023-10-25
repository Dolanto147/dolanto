/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeLayout from "@/components/layouts/HomeLayout";
import { DownloadButton, LinkButton } from "@/components/buttons/Buttons";
import GradientText from "@/components/tags/Tags";

export default function Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getHeroData() {
      const result = await axios.get(
        "http://localhost:1337/api/homepages?populate=deep"
      );
      if (result) {
        const data = result.data;
        setData(data.data[0].attributes);
      }
    }
    getHeroData();
  }, []);
  console.log(data);
  return (
    <HomeLayout>
      {/* sectionA */}
      <div className="flex flex-col gap-6 pt-8">
        <div className="flex max-lg:flex-col max-lg:gap-6 items-start justify-between">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-2 max-lg:justify-center">
            <h1 className="w-[90%] text-3xl xl:text-[2.6rem] leading-tight max-lg:text-2xl text-start font-medium ">
              {data?.heroTitle}
            </h1>

            <div className="flex gap-5 ">
              <LinkButton label={"About Us"} link="/" />
              <DownloadButton>Download Brochure</DownloadButton>
            </div>
          </div>
          <div className={`w-1/2  max-lg:w-full relative`}>
            <h1
              className={` whitespace-nowrap pt-3 text-center absolute top-0 left-0 pl-3`}
            >
              {data?.heroSectionImageCard[0].title}
            </h1>
            <img
              src={`http://localhost:1337${data?.heroSectionImageCard[0]?.image?.data?.attributes?.url}`}
              alt={data?.heroSectionImageCard[0].id}
              className="object-fill w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-2 grid-rows-1 items-start gap-6">
          {data?.heroSectionImageCard
            ?.filter((_: any, i: number) => i !== 0)
            .map((cards: any, index: number) => (
              <div
                className={` col-span-1 relative ${
                  index === 0 || index === 1
                    ? "-translate-y-8 max-lg:translate-y-0 "
                    : ""
                }`}
                key={cards.id}
              >
                <h1
                  className={` whitespace-nowrap pt-3 text-center absolute ${
                    index === 0 || index === 1
                      ? "top-0 right-0 pr-4"
                      : "top-0 left-0 pl-3"
                  }`}
                >
                  {cards.title}
                </h1>
                <img
                  src={`http://localhost:1337${cards?.image?.data?.attributes?.url}`}
                  alt={cards.id}
                  className="object-fill w-full h-full"
                />
              </div>
            ))}
        </div>
      </div>
      {/* sectionB */}
      <div className="grid grid-cols-4 grid-rows-5 max-lg:grid-rows-none max-lg:grid-cols-2 gap-x-6">
        <div className="col-span-2 col-start-3 max-lg:col-start-1 row-start-1 row-span-3 max-lg:row-span-1">
          <h1 className="w-[90%] text-3xl xl:text-[2.6rem] leading-tight max-lg:text-2xl text-start font-medium ">
            {data?.aboutTitle}
          </h1>
          <img
            src={`http://localhost:1337${data?.aboutSectionClientImages[0]?.image?.data?.attributes?.url}`}
            alt={data?.heroSectionImageCard[0].id}
            className="object-fill "
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-1 max-lg:row-start-2 row-span-5 max-lg:row-span-1">
          <img
            src={`http://localhost:1337${data?.aboutSectionMainImage?.data?.attributes?.url}`}
            alt={data?.heroSectionImageCard[0].id}
            className="object-fill w-full h-full"
          />
        </div>
        <div className="flex flex-col w-full justify-between  gap-10 row-start-4   max-lg:row-start-3 row-span-2 max-lg:row-span-1 max-lg:col-start-1 col-start-3 col-span-2">
          <div className="flex gap-5 w-full">
            <LinkButton label={"About Us"} link="/" />
            <DownloadButton>Download Brochure</DownloadButton>
          </div>
          <div className="flex justify-between gap-7 items-end h-full w-full">
            {data?.about_Section_text_cards?.map((textCard: any) => (
              <div
                key={textCard.id}
                className="bg-lightBLue flex flex-col items-start gap-2 rounded-3xl p-3 w-[300px] max-lg:w-[175px]"
              >
                <GradientText customTailwindStyle="text-3xl">
                  {textCard?.title}
                </GradientText>
                <GradientText>{textCard?.subTitle}</GradientText>
                <span>{textCard?.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </HomeLayout>
  );
}
