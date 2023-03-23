import { useState } from "react"

export const NumberGeneratorFn = ({ pregeneratedCount }) => {
  const [generatedNumbers, setGeneratedNumbers] = useState(() => {
    return Array(pregeneratedCount)
      .fill(0)
      .map(() => Math.random())
  });

  function generateNew() {
    setGeneratedNumbers([...generatedNumbers, Math.random()]);
  }

  return <div>
    {generatedNumbers.map((num, index) => <div key={index}>{num}</div>)}
    <button type="button" onClick={() => generateNew()}>Generate new</button>
  </div>
}