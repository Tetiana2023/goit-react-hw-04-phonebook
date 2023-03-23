import { useEffect, useState } from 'react';

export function  useLocalStorage() {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
    });
    useEffect(() => {
       
      localStorage.setItem('contacts', JSON.stringify(state));
    }, [state]);
    
     return [state, setState];
  };