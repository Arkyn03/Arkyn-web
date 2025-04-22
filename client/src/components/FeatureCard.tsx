
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  withGlow?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  withGlow = false
}) => {
  return (
    <div 
      className={cn(
        'glass p-6 rounded-2xl h-full transition-all duration-300',
        'hover:translate-y-[-4px] hover:shadow-lg',
        withGlow && 'glow',
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-arkyin-purple/20 text-arkyin-purple">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
