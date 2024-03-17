import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import face from "../assets/facebook.svg";
import twe from "../assets/twitter.svg";
import linkin from "../assets/linked.svg";
import jf from "../assets/jf-everyday.svg";

interface jou {
  id: string;
  title: string;
  Description: string;
  date: string;
  fullJournal: string;
  journalImg: string;
}

export default function Fulljournal() {
  const navigate = useNavigate();
  const location = useLocation();
  const journalId = new URLSearchParams(location.search).get("id");

  const [journal, setJournal] = useState<jou>();

  useEffect(() => {
    fetch(
      "https://my-app.yogeshwaran-r2022lcse.workers.dev/journal/get/" +
        journalId
    )
      .then((respon) => respon.json())
      .then((data) => {
        setJournal(data);
      });
  }, []);

  return (
    <div className="  flex flex-col justify-center items-center  bg-[#ffe4f1]">
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
            className=" bg-neutral-900 text-white px-6   min-h-8 min-w-12  rounded-full font-light text-xs"
            onClick={() => navigate(`/`)}
          >
            Home
          </button>
        </div>
      </div>

      <p className="text-center uppercase font-serif text-4xl mt-14">
        {journal?.title}
      </p>
      <img
        src={journal?.journalImg}
        alt=""
        className="max-h-[400px] w-fit mt-11 "
      />
      <p className=" text-justify w-[1000px] mt-11 font-light leading-loose tracking-wide">
        {journal?.fullJournal}
      </p>
    </div>
  );
}
