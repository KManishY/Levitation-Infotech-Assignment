import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const baseStyles = 'py-2 px-4 rounded-md focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
