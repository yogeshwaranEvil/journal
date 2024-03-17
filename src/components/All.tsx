import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import face from "../assets/facebook.svg";
import twe from "../assets/twitter.svg";
import linkin from "../assets/linked.svg";
import jf from "../assets/jf-everyday.svg";
import upload from "../assets/upload.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface jou {
  id: string;
  title: string;
  Description: string;
  date: string;
  fullJournal: string;
  journalImg: string[];
}

export default function All() {
  const navigate = useNavigate();
  const [journal, setJournal] = React.useState<jou[]>([]);

  useEffect(() => {
    fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/journal/getall")
      .then((respon) => respon.json())
      .then((data) => {
        setJournal(data);
      });
  }, []);

  return (
    <div className="  flex flex-col justify-center items-center  bg-[#ffffff]">
      <div className=" h-24 border-b-[1px] border-[#c9f570] flex flex-col w-full bg-white">
        <div className="h-10 bg-gray-100 flex flex-row justify-between items-center px-32 ">
          <a
            href="mailto:yogeshwaran.rlcse2022.sece.ac.in"
            className=" font-light text-sm"
          >
            yogeshwaran.rlcse2022.sece.ac.in
          </a>
          <div className=" h-fit flex flex-row gap-3 items-center">
            <a>
              <img src={face} className=" size-7"></img>
            </a>
            <a>
              <img src={twe} className="  size-6"></img>
            </a>
            <a>
              <img src={linkin} className=" size-6"></img>
            </a>
          </div>
        </div>
        <div className="flex flex-row px-32 items-center justify-between h-14 bg-white">
          <img src={jf}></img>
          <button
            className=" bg-[#c9f570] text-black px-6   min-h-8 min-w-12  rounded-full font-light text-xs flex flex-row items-center justfy-between"
            onClick={() => navigate(`/publish/?id=topublish`)}
          >
            Publish<img src={upload} className=" size-8 ml-2"></img>
          </button>
          <button
            className=" bg-neutral-900 text-white px-6   min-h-8 min-w-12  rounded-full font-light text-xs"
            onClick={() => navigate(`/`)}
          >
            Home
          </button>
        </div>
      </div>

      {journal.map((Journal, index) => (
        <>
          <div
            key={index}
            className=" border-b-[1px]  border-[#000000]   h-[520px] px-32 py-10 w-full"
          >
            <div className="h-full w-full bg-[#f0f0f1] rounded-lg border-[1px] border-[#d3cece] flex flex-row justify-between items-center py-2 gap-3 px-2">
              <div className="bg-white h-full w-1/2 flex flex-col items-center justify-center">
                {" "}
                <p className="mt-4">{Journal.title}</p>
                <Carousel className="w-[400px] ">
                  <CarouselContent>
                    {Journal.journalImg.map((img, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <img
                                src={img}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="bg-white h-full w-1/2 flex flex-col items-center justify-center">
                <p className=" font-light pl-6 mt-6 text-center align-middle px-10 leading-loose tracking-wider">
                  {Journal.Description}
                </p>
                <button
                  className=" bg-neutral-900 text-white px-6 mt-10  min-h-8 min-w-12  rounded-full font-light text-xs"
                  onClick={() => navigate(`/fulljournal/?id=${Journal.id}`)}
                >
                  View Full
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
