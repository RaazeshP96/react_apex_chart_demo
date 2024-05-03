import TopicGraph from "./components/TopicGraph";
import React from "react";

const Home: React.FC = () => {
  // Data series for the chart
  const series = [
    {
      name: "Topic Popularity", // Name of the series
      data: [23, 44, 56, 75, 56, 55, 60, 69], // Data points for the series
    },
  ];

  // Categories for the x-axis
  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  return (
    <div className="mx-auto mt-8">
      <h1 className="text-3xl font-bold underline mb-4">
        Topic Graph Visualization
      </h1>
      <TopicGraph series={series} categories={categories} />
    </div>
  );
};

export default Home;
