import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Parallax() {
  
  return (
    <div className="flex  overflow-hidden">
      <div className="flex animate-loop-scroll">
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
    </div>
    <div className="flex animate-loop-scroll" aria-hidden="true">
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
        <div className="m-10 text-2xl text-white">Moving Test</div>        
    </div>
   
    </div>
  );
}

