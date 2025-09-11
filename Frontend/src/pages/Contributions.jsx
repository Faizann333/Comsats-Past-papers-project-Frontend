import { useContext } from "react";
import { PastPapersContext } from '../components/store/PaperListContext.jsx';

import { ThemeContext } from '../components/store/ThemeContext';

const Contributions = () => {
    const {darkMode} = useContext(ThemeContext)
  const { paperList } = useContext(PastPapersContext);

  // Count contributions per user
  const contributionCount = paperList.reduce((acc, paper) => {
    acc[paper.instructorName] = (acc[paper.instructorName] || 0) + 1;
    return acc;
  }, {});

  // Sort users by number of uploads (desc)
  const sortedContributors = Object.entries(contributionCount).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className={`  ${darkMode? 'bg-gray-900' : 'bg-white'}`}>
    <div className={`max-w-3xl mx-auto p-6 min-h-[500px] 
    ${darkMode? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className={`text-2xl font-bold mb-6 text-center 
        ${darkMode? 'bg-gradient-to-l from-white to-gray-600 bg-clip-text text-transparent': ''}`}>Top Contributors</h1>

      <ul className="space-y-3">
        {sortedContributors.map(([author, count], index) => (
          <li
            key={author}
            className={`flex justify-between items-center   p-4 rounded-lg shadow-md
                   ${darkMode? 'bg-gray-900 text-white border border-purple-400' : 'bg-white border border-gray-400'} `}
          >
            <span className="font-medium">
              {index + 1}. {author}
            </span>
            <span className="text-sm text-white-500">
              {count} {count > 1 ? "papers" : "paper"}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Contributions;
