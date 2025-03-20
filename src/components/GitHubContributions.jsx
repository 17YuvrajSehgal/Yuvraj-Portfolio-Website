import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  const theme = {
    dark: [
      '#161B22',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353'
    ]
  };

  return (
    <div className="w-full min-h-[300px] flex flex-col justify-center items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl bg-tertiary/30 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">GitHub Contributions</h2>
        <div className="overflow-x-auto flex justify-center">
          <GitHubCalendar
            username="17YuvrajSehgal"
            theme={theme}
            blockSize={12}
            blockMargin={5}
            fontSize={15}
            style={{
              color: 'white',
              padding: '1rem',
              backgroundColor: 'transparent'
            }}
            hideColorLegend={false}
            hideMonthLabels={false}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions; 