import React, { useState, useEffect } from "react";

export const ReactCounter = () => {
  const [count, setCount] = useState<number>(0);
  const handleClickCount = (): void => {
    setCount((prev) => (prev += 1));
    console.log("React is the best!");
  };

  return <button onClick={handleClickCount}>{count}</button>;
};
