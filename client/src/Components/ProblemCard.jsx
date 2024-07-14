import React from 'react';

const ProblemCard = ({ title, difficulty, tags, solveUrl, noOfPeopleSolved }) => {
  return (
    <div className="m-4 bg-gray-800 shadow-lg rounded-lg p-6 flex justify-between items-center border border-[#455A64] transition-transform transform hover:scale-105">
      <div>
        <div className="text-xl font-bold text-white">{title}</div>
        <div className="flex flex-row gap-2 mb-4 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-blue-500 px-3 py-1 rounded text-sm text-blue-500 hover:border-blue-700 transition duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end">
        <a
          href={solveUrl}
          className="border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Solve Problem
        </a>
        <div className="text-white flex justify-between mt-2">
          <p className="text-sm">{difficulty}</p>
          <p className="text-sm">|</p>
          <p className="text-sm">{noOfPeopleSolved} solved</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;
