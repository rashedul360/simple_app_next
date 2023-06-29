"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "./redux/app/store";

export default function Home() {
 // ==================//hooks//===================
 const { count } = useSelector((state: RootState) => state.counter);
 // ==================//hooks//===================
 return (
  <div className="text-white">
   <Link href={"/about"}>about</Link>
   <div>
    <p>
     countSlice count value is <>{count}</>
    </p>
   </div>
  </div>
 );
}
