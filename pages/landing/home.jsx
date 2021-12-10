import React, { useState } from "react";
import { fetchWeather } from "../../src/api/fetchWeather";

const Home = () => {
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };

  return (
    <div>
      <div>Hello World</div>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {console.log(query)}
    </div>
  );
};

export default Home;
