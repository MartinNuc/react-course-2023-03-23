import {Button} from './Button';
import {Menu} from './Menu';
import {useState} from 'react';

export const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMenu = () => {
    setIsVisible(!isVisible);
  }

  return <>
    <Button onToggleMenu={handleToggleMenu} />
    {isVisible && <Menu />}
  </>
}