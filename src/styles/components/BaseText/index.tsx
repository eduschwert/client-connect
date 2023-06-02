import React from 'react';

interface iBaseTextProps {
  tag: 'p' | 'span' | 'small';
  className?: string;
  children: React.ReactNode;
}
export const BaseText = ({ tag, className, children }: iBaseTextProps) => {
  return (
    <>
      {tag === 'p' && <p className={className}>{children}</p>}
      {tag === 'span' && <span className={className}>{children}</span>}
      {tag === 'small' && <small className={className}>{children}</small>}
    </>
  );
};
