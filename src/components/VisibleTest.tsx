import React, { useState, useEffect }from "react";

export const VisibleTest = () => {
  const [count, setCount] = useState<number>(0);
  const handleClickCount = (): void => {
    setCount((prev) => (prev += 1));
  };

  useEffect(() => {
    console.log('hello');
    
    setCount(1)
  }, [])
  return <button onClick={handleClickCount}>{count}</button>;
};
