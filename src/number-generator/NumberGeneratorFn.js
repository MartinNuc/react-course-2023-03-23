import { useState, useMemo } from "react"

export const NumberGeneratorFn = ({ pregeneratedCount }) => {
  const initialState = useMemo(() => {
    return Array(pregeneratedCount)
      .fill(0)
      .map(() => Math.random())
  }, [pregeneratedCount]);
  const [generatedNumbers, setGeneratedNumbers] = useState(initialState);

  function generateNew() {
    setGeneratedNumbers([...generatedNumbers, Math.random()]);
  }

  return <div>
    {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
    <button type="button" onClick={() => generateNew()}>Generate new</button>
  </div>
};