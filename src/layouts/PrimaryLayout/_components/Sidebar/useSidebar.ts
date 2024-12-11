import { useLocation } from 'react-router-dom';
import { Profile, Rank, Setting2 } from 'iconsax-react';
import { useState } from 'react';

export const sideBarItem = [
  { title: 'Match', path: '/match', Icon: Rank },
  { title: 'User', path: '/user', Icon: Profile },
  { title: 'Setting', path: '/setting', Icon: Setting2 },
];

export function useSidebar () {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  function isActive (pathName: string) {
    return location.pathname === pathName;
  }

  function menuButtonClickHandler(){
      setIsOpen(!isOpen);
  }

  return { isActive ,isOpen,menuButtonClickHandler};
}
