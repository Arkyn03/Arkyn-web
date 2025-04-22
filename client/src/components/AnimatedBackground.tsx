
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  variant?: 'purple' | 'blue' | 'dual';
  intensity?: 'low' | 'medium' | 'high';
  withGrid?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className,
  variant = 'dual',
  intensity = 'medium',
  withGrid = false
}) => {
  // Determine the blur size based on intensity
  const blurSize = {
    low: 'blur-[80px]',
    medium: 'blur-[100px]',
    high: 'blur-[140px]'
  };
  
  // Determine opacity based on intensity
  const opacityLevel = {
    low: 'opacity-20',
    medium: 'opacity-30',
    high: 'opacity-40'
  };
  
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)}>
      {withGrid && <div className="absolute inset-0 bg-grid-dark opacity-30" />}
      
      <div className="absolute inset-0">
        {variant === 'purple' && (
          <div 
            className={cn(
              'absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-arkyin-purple/50',
              blurSize[intensity],
              opacityLevel[intensity],
              'animate-slow-spin'
            )}
          />
        )}
        
        {variant === 'blue' && (
          <div 
            className={cn(
              'absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-arkyin-blue/50',
              blurSize[intensity],
              opacityLevel[intensity],
              'animate-slow-spin'
            )}
          />
        )}
        
        {variant === 'dual' && (
          <>
            <div 
              className={cn(
                'absolute top-[30%] left-[30%] w-[500px] h-[500px] rounded-full bg-arkyin-purple/40',
                blurSize[intensity],
                opacityLevel[intensity],
                'animate-slow-spin'
              )}
            />
            <div 
              className={cn(
                'absolute top-[40%] right-[25%] w-[400px] h-[400px] rounded-full bg-arkyin-blue/40',
                blurSize[intensity],
                opacityLevel[intensity],
                'animate-slow-spin origin-bottom-right'
              )}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AnimatedBackground;
