import React, { useState } from "react";
// import TokenDisplay from "./tokendisplay";

const Tokenform = () => {
    const [formData, setFormData] = useState({
        blueCount: 0,
        bluePrefix: "B-",
        bluePerRow: 3,
        redCount: 0,
        redPrefix: "R-",
        redPerRow: 3,
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
          bluePerRow: 3,
          redCount: 0,
          redPrefix: "R-",
          redPerRow: 3,
        });
        setTokens({ blue: [], red: [] });
      };
    
      const renderTokens = (tokenData, perRow) => {
        const rows = [];
        for (let i = 0; i < tokenData.length; i += perRow) {
          rows.push(tokenData.slice(i, i + perRow));
        }
    
        return rows.map((row, index) => (
          <div key={index} className="flex gap-2 mb-2">
            {row.map((token, idx) => (
              <span key={idx} className="bg-gray-200 p-2 rounded">{token}</span>
            ))}
          </div>
        ));
      };
    
      return (
        <div className="p-6 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold text-center mb-8">Token Generator</h1>
    
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="blueCount"
              placeholder="Blue Tokens"
              value={formData.blueCount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bluePrefix"
              placeholder="Blue Prefix"
              value={formData.bluePrefix}
              onChange={handleChange}
            />
            <input
              type="number"
              name="bluePerRow"
              placeholder="Blue Tokens Per Row"
              value={formData.bluePerRow}
              onChange={handleChange}
            />
            <input
              type="number"
              name="redCount"
              placeholder="Red Tokens"
              value={formData.redCount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="redPrefix"
              placeholder="Red Prefix"
              value={formData.redPrefix}
              onChange={handleChange}
            />
            <input
              type="number"
              name="redPerRow"
              placeholder="Red Tokens Per Row"
              value={formData.redPerRow}
              onChange={handleChange}
            />
          </div>
    
          <div className="flex gap-2 mt-4">
            <button onClick={generateTokens} className="bg-blue-500 text-white px-4 py-2">
              Generate
            </button>
            <button onClick={clearForm} className="bg-red-500 text-white px-4 py-2">
              Clear
            </button>
          </div>
    
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Blue Tokens:</h2>
            {tokens.blue.data && tokens.blue.data.length > 0 ? (
          renderTokens(tokens.blue.data, tokens.blue.perRow)
        ) : (
          <p className="text-gray-500 italic">No blue tokens generated.</p>
        )}
    
            <h2 className="text-xl font-semibold mt-6 mb-4">Red Tokens:</h2>
            {tokens.red.data && tokens.red.data.length > 0 ? (
          renderTokens(tokens.red.data, tokens.red.perRow)
        ) : (
          <p className="text-gray-500 italic">No red tokens generated.</p>
        )}
          </div>
        </div>
  )
}

export default Tokenform
