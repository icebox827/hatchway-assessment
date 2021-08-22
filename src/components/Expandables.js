import React from 'react';
import { useState } from 'react';

const Expandables = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="switch">
      <button>
        +
      </button>
    </div>
  )
};

export default Expandables;