import React from 'react';
import dd from "../../assets/404-status-code.png";

export default function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img className='max-w-full h-auto' src={dd} alt="404 Not Found" />
    </div>
  );
}
