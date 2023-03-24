import { useContext } from "react"
import { ThemeContext } from '../App';

export const Theme = () => {

  const { currentTheme, toggle } = useContext(ThemeContext);

  return <>
    {currentTheme}
    <button onClick={toggle}>toggle theme</button>
  </>
}