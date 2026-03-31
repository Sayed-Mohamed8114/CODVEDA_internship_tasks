//import { useState } from 'react'
import SearchBar  from "./Components/SearchBar";
import WeatherSection from "./Components/WeatherSection";
export default function App() {
  return (
    <div className="flex items-center h-screen justify-center flex-col">
      <SearchBar/>
      <WeatherSection/>
    </div>
  );
}

