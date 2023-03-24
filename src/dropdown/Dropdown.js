import {Button} from './Button';
import {Menu} from './Menu';
import {useState, useEffect} from 'react';

export const Dropdown = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      props.onDropdownOpened()
    }
  }, [isVisible]);

  const handleToggleMenu = () => {
    setIsVisible(!isVisible);
  }

  return <>
    <Button onToggleMenu={handleToggleMenu} />
    {isVisible && <Menu />}
  </>
}