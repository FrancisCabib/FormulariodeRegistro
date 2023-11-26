
import React from 'react';

function SocialButton({ onClick, Icon }) {
  return (
    <button onClick={onClick} className="social-button">
      <Icon />
    </button>
  );
}

export default SocialButton;
