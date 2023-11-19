import React, { useEffect, useRef, ReactNode } from 'react';

interface ClickOutsideHandlerProps {
  onOutsideClick: () => void;
  className?: string;
  children: ReactNode;
}

const ClickOutsideHandler = ({
  onOutsideClick,
  className,
  children
}: ClickOutsideHandlerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef} className={className}>{children}</div>;
};

export default ClickOutsideHandler;

