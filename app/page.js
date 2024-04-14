import Image from "next/image";
import Cards from "./Cards/Cards";
import "./Cards/cardsmodule.css";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 mt-10 hide-scrollbar">
      <Cards></Cards>
    </div>
  );
}
