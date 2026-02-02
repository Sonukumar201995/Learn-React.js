import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "sonu",
    address: {
      city: "Delhi",
      country: "India"
    }
  });

  const handleName = (val) => {
    setData(prev => ({
      ...prev,
      name: val
    }));
  };

  const handleCity = (val) => {
    setData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        city: val
      }
    }));
  };

  const handleCountry = (val) => {
    setData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        country: val
      }
    }));
  };

  return (
    <div>
      <h1>Updating Objects in State</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => handleName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter City"
        value={data.address.city}
        onChange={(e) => handleCity(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Country"
        value={data.address.country}
        onChange={(e) => handleCountry(e.target.value)}
      />

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
}

export default App;
