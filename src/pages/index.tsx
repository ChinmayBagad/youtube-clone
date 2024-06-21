import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        image={"yt.png"}
        thumb={"thumbnail.jpg"}
        title={"Come With me on a exicting Journey"}
        author={"Chinmay Bagad"}
        view={"14Mn"}
        timeStamp={"14 Days"}
      />
    </div>
  );
}
