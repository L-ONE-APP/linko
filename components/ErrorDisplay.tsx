
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-500/30 backdrop-blur-md text-red-100 p-4 rounded-2xl text-center h-64 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2">Oops!</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
