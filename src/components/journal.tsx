import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface jou {
  id : string
  title: string;
  Description: string;
  date: string;
  fullJournal: string;
  journalImg: string;
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
        <CarouselContent>
         
           {journal.map((Journal, index) => (
          <CarouselItem key={index} className=" basis-[700px]   ">
            <div className="p-1">
              <Card className="border-black rounded-[30px]">
                <CardContent className="flex flex-row min-h-[300px]   justify-between p-5 ">
                  <img src={Journal.journalImg}className="min-h-[300px] max-w-[300px] rounded-[27px] "></img>
                  <div className="flex flex-col font-semibold items-center pr-3"><p>{Journal.title}</p><p className=" font-light pl-6 mt-6">{Journal.Description}</p><button       onClick={() => navigate(`/fulljournal/?id=${Journal.id}`)} >View Full</button></div>
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
  );
}
