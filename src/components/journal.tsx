import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import more from "../assets/more.svg";

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

export default function Journal() {
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
    <div className=" h-screen pt-28 px-11">
      <p>Popular Journals</p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="min-w-screen mt-16"
      >
        <CarouselContent className="flex flex-row items-center">
          {journal.slice(0, 3).map((Journal, index) => (
            <CarouselItem key={index} className=" basis-[700px]   ">
              <div className="p-1">
                <Card className="border-black rounded-[30px]">
                  <CardContent className="flex flex-row min-h-[300px]   justify-between p-5 ">
                    <img
                      src={Journal.journalImg[0]}
                      className="min-h-[300px] max-w-[300px] rounded-[27px] "
                    ></img>
                    <div className="flex flex-col font-semibold items-center pr-3">
                      <p>{Journal.title}</p>
                      <p className=" font-light pl-6 mt-6">
                        {Journal.Description}
                      </p>
                      <button
                        className=" bg-neutral-900 text-white px-6   min-h-8 min-w-12  rounded-full font-light text-xs"
                        onClick={() =>
                          navigate(`/fulljournal/?id=${Journal.id}`)
                        }
                      >
                        View Full
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem className=" basis-[200px]  ">
            <div className="p-1">
              <Card className=" border-none">
                <CardContent className="flex flex-col min-h-[150px] min-w-[200px] justify-center items-center p-5 ">
                  <button
                    className=" bg-neutral-900 text-white rounded-[15px]   p-6 font-light text-sm flex flex-row items-center justify-between"
                    onClick={() => navigate(`/Alljournal/?id=toswitch`)}
                  >
                    View All <img src={more} className=" size-8 ml-2"></img>
                  </button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
