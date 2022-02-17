import { useState } from "react";

export default function CarForm() {
  const [hits, setHits] = useState([]); // result from our search api

  const search = async (e) => {
    const q = e.target.value;
    if (q.length > 2) {
      const params = new URLSearchParams({ q });
      const res = await fetch("/api/search?" + params);

      const result = await res.json();
      console.log(result);
      setHits(result["cars"]);
    }
  };

  return (
    <div>
      <input type="text" onChange={search} />
      <ul>
        {hits.map((hit) => (
          <li key={hit.entityId}>
            {hit.make} {hit.model} | {hit.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
