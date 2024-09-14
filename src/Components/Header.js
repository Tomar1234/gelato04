import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import react, { useState } from 'react';

function Header() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <></>


  );
};

export default Header;
