import React, { useState } from "react";

export default function Assistant({ products }) {
  const [query, setQuery] = useState("");
  const suggestions = products.filter((p) =>
    p.custom_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="assistant-panel">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What do you need help with today?"
      />
      {suggestions.map((product) => (
        <div key={product.id}>{product.custom_name}</div>
      ))}
    </div>
  );
}
