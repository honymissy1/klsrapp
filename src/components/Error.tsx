// src/components/MyComponent.tsx
import React from "react";


// Functional component
const Error: React.FC = () => {
  return (
    <div className='flex items-center flex-col justify-center'>
    <video playsInline muted loop autoPlay controls={false} className='w-[80%]' src="./images/error.mp4" />
    <div className='p-2 text-center'>

    <h1 className='font-semibold text-lg font-fancy'>Connection Error</h1>
    <p>Check your internet connection and refresh the page</p>
    </div>
  </div>
  );
};

export default Error;