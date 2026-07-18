import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-200 no-underline cursor-pointer';

  const variantClasses = {
    primary:
      'bg-forest text-white hover:bg-forest-accent shadow-sm hover:shadow-md',
    secondary:
      'border border-forest/20 text-forest hover:bg-forest/5 hover:border-forest/40',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
