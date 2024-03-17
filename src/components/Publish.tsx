import face from "../assets/facebook.svg";
import twe from "../assets/twitter.svg";
import linkin from "../assets/linked.svg";
import jf from "../assets/jf-everyday.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import upload from "../assets/upload.svg";

interface formdata {
  id: string;
  title: string;
  description: string;
  date: string;
  fullJournal: string;
  journalImg: string[];
}
export default function Publish() {
  const navigate = useNavigate();

  const [formData, setadd] = useState<formdata>();

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://my-app.yogeshwaran-r2022lcse.workers.dev/journal/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
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
      <form
        onSubmit={onSubmitData}
        className=" flex flex-row items-start justify-center gap-20 mt-10"
      >
        <div className="flex flex-col ">
          <label className="">
            ID:
            <br />
            <input
              type="text"
              name="id"
              className=" p-2 border-[1px] border-black mt-1 rounded-lg h-10 min-w-[400px]"
              value={formData?.id}
              onChange={(data) => {
                setadd({ ...formData!, id: data.target.value });
              }}
            />
          </label>
          <br />
          <label>
            Title: <br />
            <input
              type="text"
              name="title"
              className="p-2 border-[1px] border-black mt-1 rounded-lg h-10 min-w-[400px]"
              value={formData?.title}
              onChange={(data) => {
                setadd({ ...formData!, title: data.target.value });
              }}
            />
          </label>
          <br />
          <label>
            Description: <br />
            <textarea
              name="Description"
              className="p-2 border-[1px] border-black mt-1 rounded-lg h-32 min-w-[400px]"
              value={formData?.description}
              onChange={(data) => {
                setadd({ ...formData!, description: data.target.value });
              }}
            />
          </label>
          <br />
          <label>
            Date: <br />
            <input
              type="text"
              name="Date"
              className="p-2 border-[1px] border-black mt-1 rounded-lg h-10 min-w-[400px]"
              value={formData?.date}
              onChange={(data) => {
                setadd({ ...formData!, date: data.target.value });
              }}
            />
          </label>
        </div>
        <div className="flex flex-col ">
          <label>
            Full Journal: <br />
            <textarea
              name="Full Journal"
              className=" p-2 border-[1px] border-black mt-1 rounded-lg h-72 min-w-[400px]"
              value={formData?.fullJournal}
              onChange={(data) => {
                setadd({ ...formData!, fullJournal: data.target.value });
              }}
            />
          </label>
          <br />
          <label>
            Image 1:
            <br />
            <input
              className="p-2 border-[1px] border-black mt-1 rounded-lg h-10 min-w-[400px]"
              type="text"
              name="image1"
              value={(formData?.journalImg && formData.journalImg[0]) || ""} // Assuming journalImg is an array
              onChange={(e) => {
                const newJournalImg = [...(formData?.journalImg || [])];
                newJournalImg[0] = e.target.value;
                setadd((formData) => ({
                  ...formData!,
                  journalImg: newJournalImg,
                }));
              }}
              
            />
          </label>
          <label>
            Image 2:
            <br />
            <input
              className="p-2 border-[1px] border-black mt-1 rounded-lg h-10 min-w-[400px]"
              type="text"
              name="image2"
              value={(formData?.journalImg && formData.journalImg[1]) || ""} // Assuming journalImg is an array
              onChange={(e) => {
                const newJournalImg = [...(formData?.journalImg || [])];
                newJournalImg[1] = e.target.value;
                setadd((formData) => ({
                  ...formData!,
                  journalImg: newJournalImg,
                }));
              }}
            />
          </label>
         
        </div>
        <button
          className=" bg-[#c9f570] text-black px-6   min-h-8 min-w-12  rounded-full font-light text-xs flex flex-row items-center justfy-between"
          type="submit"
        >
          Publish Now<img src={upload} className=" size-8 ml-2"></img>
        </button>
      </form>
    </div>
  );
}
