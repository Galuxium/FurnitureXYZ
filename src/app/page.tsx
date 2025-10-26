// hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonUrl: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
}) => {
  return (
    <div className="flex flex-col justify-center items-start space-y-4">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">{title}</h1>
      <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-600">
        {subtitle}
      </p>
      <div className="flex space-x-4">
        <a
          href={primaryButtonUrl}
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        >
          {primaryButtonText}
        </a>
        {secondaryButtonText && (
          <a
            href={secondaryButtonUrl}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300"
          >
            {secondaryButtonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;