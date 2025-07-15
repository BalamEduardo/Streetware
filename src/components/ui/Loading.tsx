import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'accent' | 'white';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'medium', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4';
      case 'large':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'accent':
        return 'text-brand-accent';
      case 'white':
        return 'text-white';
      default:
        return 'text-brand-yellow';
    }
  };

  return (
    <div className={`animate-spin ${getSizeClasses()} ${getColorClasses()} ${className}`}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width = '100%', height = '20px' }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-white/10 rounded ${className}`}
      style={{ width, height }}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white/5 rounded-lg overflow-hidden p-4 animate-pulse">
      <Skeleton height="240px" className="mb-4 rounded-lg" />
      <Skeleton height="24px" className="mb-2" />
      <Skeleton height="16px" width="80%" className="mb-2" />
      <div className="flex justify-between items-center">
        <Skeleton height="20px" width="60px" />
        <Skeleton height="16px" width="100px" />
      </div>
    </div>
  );
}

export function PageLoadingScreen() {
  return (
    <div className="min-h-screen bg-brand flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="large" />
        <p className="text-white/70 mt-4 text-lg">Cargando Streetware...</p>
      </div>
    </div>
  );
}
