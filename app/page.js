import Image from "next/image";
import Cards from "./Cards/Cards";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
       <Cards></Cards>
    </div>
  );
}
