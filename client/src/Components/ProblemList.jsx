import React from 'react';
import ProblemCard from './ProblemCard';

const problems = [
  {
    id: 1,
    title: "Indexes of Subarray Sum",
    difficulty: "Medium",
    tags: ["Arrays", "sliding-window", "prefix-sum"],
    solveUrl: "https://leetcode.com/problems/indexes-of-subarray-sum/",
    noOfPeopleSolved: "5K"
  },
  {
    id: 2,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Arrays", "two-pointer"],
    solveUrl: "https://leetcode.com/problems/two-sum/",
    noOfPeopleSolved: "10K"
  },
  {
    id: 3,
    title: "Reverse Linked List",
    difficulty: "Hard",
    tags: ["Linked Lists", "Recursion"],
    solveUrl: "https://leetcode.com/problems/reverse-linked-list/",
    noOfPeopleSolved: "3K"
  },
  {
    id: 4,
    title: "Merge Intervals",
    difficulty: "Medium",
    tags: ["Arrays", "Sorting"],
    solveUrl: "https://leetcode.com/problems/merge-intervals/",
    noOfPeopleSolved: "4K"
  },
  {
    id: 5,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["Strings", "Stack"],
    solveUrl: "https://leetcode.com/problems/valid-parentheses/",
    noOfPeopleSolved: "7K"
  },
  {
    id: 6,
    title: "Climbing Stairs",
    difficulty: "Easy",
    tags: ["Dynamic Programming"],
    solveUrl: "https://leetcode.com/problems/climbing-stairs/",
    noOfPeopleSolved: "8K"
  },
];

const ProblemList = () => {
  return (
    <div className="flex flex-col justify-center mb-4 font-mono bg-gray-900 min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-6 flex justify-center items-center text-white">Practice Problems</h2>
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          title={problem.title}
          difficulty={problem.difficulty}
          tags={problem.tags}
          solveUrl={problem.solveUrl}
          noOfPeopleSolved={problem.noOfPeopleSolved}
        />
      ))}
    </div>
  );
};

export default ProblemList;
