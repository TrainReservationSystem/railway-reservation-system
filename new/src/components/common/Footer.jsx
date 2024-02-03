import React from 'react';

const Footer = ({ isOpen }) => {
  return (
    <div
      className='bg-transparent border-top border-dark w-100'
      style={{
        height: '5%',
        fontSize: '18px',
        textAlign: 'center',
      }}
    >
      © 2023 {isOpen && 'Company, Inc'}
    </div>
  );
};

export default Footer;
