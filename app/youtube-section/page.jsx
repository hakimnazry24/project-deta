import RedButton123 from "@/components/Button";
import CategoryButton from "@/components/CategoryButton";
import VideoCard from "@/components/VideoCard";
import React from "react";
import { FaCamera, FaMicrophone, FaBell } from "react-icons/fa";

const YoutubeSection = () => {
  return (
    <section className="bg-[#1d1d1d] h-screen p-5">
      {/* search bar section */}
      <div className="flex justify-between">
        <div></div>
        <div className="flex gap-5 items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search ..."
            className="p-2 border border-gray-500 rounded-3xl bg-[#1d1d1d]"
          />
          <button className="rounded-full bg-gray-700 w-[40px] h-[40px] flex justify-center items-center">
            <FaMicrophone className="text-white" />
          </button>
        </div>
        <div className="flex gap-3">
          <div className="rounded-full bg-gray-700 w-[40px] h-[40px] flex justify-center items-center">
            <FaCamera className="text-white" />
          </div>
          <div className="rounded-full bg-gray-700 w-[40px] h-[40px] flex justify-center items-center">
            <FaBell className="text-white" />
          </div>
        </div>
      </div>

      {/* category section */}
      <div className="flex gap-x-3 mt-5 mb-10">
        <CategoryButton category={"All"} />
        <CategoryButton category={"Gaming"} />
        <CategoryButton category={"Mixes"} />
        <CategoryButton category={"Music"} />
        <CategoryButton category={"KSI"} />
        <CategoryButton category={"Live"} />
        <CategoryButton category={"Mobile Legend: Bang Bang"} />
        <CategoryButton category={"Anisong"} />
        <CategoryButton category={"Comic book"} />
      </div>

      {/* video card section */}
      <div className="grid grid-cols-3 justify-center gap-x-5 gap-y-10">
        <VideoCard image={"/youtube-thumbnail/image1.jpeg"} title={"First video"}  channel={"First  channel"} view={"50M"}/>
        <VideoCard image={"/youtube-thumbnail/image2.jpeg"} title={"Second video"} channel={"Second channel"} view={"34k"}/>
        <VideoCard image={"/youtube-thumbnail/image3.jpg"}  title={"Third video"}  channel={"Third  channel"} view={"1M"}/>
        <VideoCard image={"/youtube-thumbnail/image4.jpg"}  title={"Fourth video"} channel={"Fourth channel"} view={"5M"}/>
        <VideoCard image={"/youtube-thumbnail/image5.jpeg"} title={"Fifth video"}  channel={"Fifth  channel"} view={"70M"}/>
        <VideoCard image={"/youtube-thumbnail/image6.jpeg"} title={"Sixth video"}  channel={"Sixth  channel"} view={"3.2M"}/>
      </div>

      {/* red button section */}
      {/* FIRST METHOD */}
      <div className="mb-10">
        <RedButton123 parameter={"First method"}/>
      </div>

      {/* SECOND METHOD */}
      <div>
        <RedButton123 parameter={"Second method"}></RedButton123>
      </div>
    </section>
  );
};

export default YoutubeSection;
