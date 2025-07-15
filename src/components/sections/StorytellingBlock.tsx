import React from 'react';

interface StorytellingBlockProps {
  title: string;
  subtitle?: string;
  description: string;
  theme?: 'dark' | 'accent' | 'gradient';
  position?: 'left' | 'center' | 'right';
}

export default function StorytellingBlock({
  title,
  subtitle,
  description,
  theme = 'dark',
  position = 'center'
}: StorytellingBlockProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case 'accent':
        return 'bg-brand-accent/10 border-brand-accent/20';
      case 'gradient':
        return 'bg-gradient-to-r from-brand-accent/10 to-brand-yellow/10 border-transparent';
      default:
        return 'bg-black/20 border-white/10';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'text-left items-start';
      case 'right':
        return 'text-right items-end';
      default:
        return 'text-center items-center';
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`
          ${getThemeClasses()}
          border
          backdrop-blur-sm
          rounded-2xl
          p-8 sm:p-12 md:p-16
          flex flex-col
          ${getPositionClasses()}
        `}>
          {subtitle && (
            <span className="
              text-brand-yellow
              text-sm sm:text-base
              font-semibold
              uppercase
              tracking-widest
              mb-4
            ">
              {subtitle}
            </span>
          )}
          
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-display
            text-white
            leading-tight
            mb-6 sm:mb-8
            max-w-4xl
          ">
            {title}
          </h2>
          
          <p className="
            text-base sm:text-lg md:text-xl
            text-white/80
            leading-relaxed
            max-w-3xl
          ">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
