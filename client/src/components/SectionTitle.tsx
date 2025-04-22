
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
  withLine?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className = '',
  subtitleClassName = '',
  withLine = true
}) => {
  return (
    <div className={cn(center && 'text-center', className)}>
      {withLine && (
        <div className={cn(
          'w-20 h-1 bg-gradient-to-r from-arkyin-blue to-arkyin-purple mb-6',
          center && 'mx-auto'
        )} />
      )}
      <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-gradient mb-4">{title}</h2>
      {subtitle && (
        <p className={cn('text-gray-400 max-w-xl', center && 'mx-auto', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
