import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Never', value: 2.4 },
  { name: 'Rarely', value: 13.4 },
  { name: 'Sometimes', value: 28 },
  { name: 'Often', value: 29.3 },
  { name: 'Always', value: 26.8 },
];

const COLORS = ['#1d4ed8', '#dc2626', '#facc15', '#22c55e', '#a855f7']; 

const SurveyPieChart = () => {
  return (
  <>
    <div className="bg-white text-black rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Distraction During Coding Survey
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-lg leading-7 text-gray-300">
  <p className="mb-4 text-justify sm:text-left">
    This pie chart presents the results of a recent survey conducted among programmers regarding their levels of distraction during coding.
    The majority of participants reported being distracted "Often" (29.3%) or "Always" (26.8%) while working, highlighting a growing issue of focus in digital environments.
  </p>
  <p className="text-justify sm:text-left">
    Only a small percentage reported "Never" getting distracted (2.4%), indicating that distractions have become a common experience in modern development workflows.
    This data supports the need for improved time management, focused environments, and better control over notification systems to enhance productivity.
  </p>
</div>
    </>
  );
};


export default SurveyPieChart;
