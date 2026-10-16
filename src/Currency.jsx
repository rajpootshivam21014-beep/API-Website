import React, { useEffect, useState } from "react";

const Currency = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/INR")
      .then((res) => {
        if (!res.ok) throw new Error("API request failed");
        return res.json();
      })
      .then((data) => {
        if (data.result !== "success") {
          throw new Error("Rates unavailable");
        }
        setRates(data.rates);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2>Loading exchange rates...</h2>;

  return (
    <>
      <h1>Currency Converter</h1>
      <p>1 INR = {rates.USD} USD</p>
      <p>1 INR = {rates.EUR} EUR</p>

      <a href="https://www.exchangerate-api.com">
        Rates By Exchange Rate API
      </a>
    </>
  );
};

export default Currency;