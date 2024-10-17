import React, { useState } from "react";

const Tokenform = () => {


  const [formData, setFormData] = useState({
    blueCount: 0,
    bluePrefix: "B-",
    bluePerRow: 3,
    redCount: 0,
    redPrefix: "R-",
    redPerRow: 2,
  });

  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateTokens = () => {
    const { blueCount, bluePrefix, bluePerRow, redCount, redPrefix, redPerRow } = formData;

    const blueTokens = Array.from({ length: +blueCount }, (_, i) => `${bluePrefix}${i + 1}`);
    const redTokens = Array.from({ length: +redCount }, (_, i) => `${redPrefix}${i + 1}`);

    setTokens({
      blue: { data: blueTokens, perRow: +bluePerRow },
      red: { data: redTokens, perRow: +redPerRow },
    });
  };

  const clearForm = () => {
    setFormData({
      blueCount: 0,
      bluePrefix: "B-",
      bluePerRow: 0,
      redCount: 0,
      redPrefix: "R-",
      redPerRow: 0,
    });
    setTokens({ blue: [], red: [] });
  };

  const renderTokens = (tokenData, perRow, bgColor) => {
    const rows = [];
    for (let i = 0; i < tokenData.length; i += perRow) {
      rows.push(tokenData.slice(i, i + perRow));
    }

    return rows.map((row, index) => (
      <div key={index} className="flex gap-2 mb-2">
        {row.map((token, id) => (
          <span
            key={id}
            className={`p-2 rounded text-white ${bgColor}`}
          >
            {token}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Token Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Blue Token Generator Section */}
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Blue Token Generator</h2>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              name="blueCount"
              className="border p-2 rounded"
              placeholder="Count"
              value={formData.blueCount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bluePrefix"
              className="border p-2 rounded"
              placeholder="Prefix"
              value={formData.bluePrefix}
              onChange={handleChange}
            />
            <input
              type="number"
              name="bluePerRow"
              className="border p-2 rounded"
              placeholder="Per Row"
              value={formData.bluePerRow}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Red Token Generator Section */}
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Red Token Generator</h2>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              name="redCount"
              className="border p-2 rounded"
              placeholder="Count"
              value={formData.redCount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="redPrefix"
              className="border p-2 rounded"
              placeholder="Prefix"
              value={formData.redPrefix}
              onChange={handleChange}
            />
            <input
              type="number"
              name="redPerRow"
              className="border p-2 rounded"
              placeholder="Per Row"
              value={formData.redPerRow}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-6 justify-center">
        <button
          onClick={generateTokens}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate
        </button>
        <button
          onClick={clearForm}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Blue Tokens:</h2>
        {tokens.blue.data && tokens.blue.data.length > 0 ? (
          renderTokens(tokens.blue.data, tokens.blue.perRow, "bg-blue-500")
        ) : (
          <p className="text-gray-500 italic">No blue tokens generated.</p>
        )}

        <h2 className="text-xl font-semibold mt-6 mb-4">Red Tokens:</h2>
        {tokens.red.data && tokens.red.data.length > 0 ? (
          renderTokens(tokens.red.data, tokens.red.perRow, "bg-red-500")
        ) : (
          <p className="text-gray-500 italic">No red tokens generated.</p>
        )}
      </div>
    </div>
  );
};

export default Tokenform;
