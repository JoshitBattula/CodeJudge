import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import Timer from './Timer';
import Notes from './Notes';
import BookmarkButton from './BookmarkButton';

const ProblemDetails = ({ problem }) => {
  const [solved, setSolved] = useState(false);

  const handleSolve = () => {
    setSolved(true);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{problem.name}</h1>
      <p className="text-gray-300 mb-4">{problem.statement}</p>
      <div className="flex items-center mb-4">
        <BookmarkButton problemId={problem._id} />
        {solved && <span className="ml-4 text-green-400 font-semibold">Solved</span>}
      </div>
      <Timer />
      <CodeEditor problemId={problem._id} onSolve={handleSolve} />
      <Notes problemId={problem._id} />
    </div>
  );
};

export default ProblemDetails;
