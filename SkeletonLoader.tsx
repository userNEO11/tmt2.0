import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
}) => {
  const roundedClass =
    variant === 'circular'
      ? 'rounded-full'
      : variant === 'text'
      ? 'rounded-xs h-4'
      : 'rounded-xs';

  return (
    <div
      className={`bg-white/[0.07] border border-white/[0.05] animate-shimmer ${roundedClass} ${className}`}
      aria-hidden="true"
    />
  );
};

export const ProductRangeSkeleton: React.FC = () => {
  return (
    <div className="bg-[#121217] border border-white/15 rounded-xs overflow-hidden shadow-2xl animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column Skeleton */}
        <div className="lg:col-span-5 relative bg-[#09090C] border-b lg:border-b-0 lg:border-r border-white/10 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="w-24 h-6" />
              <Skeleton className="w-32 h-4" />
            </div>

            <Skeleton className="w-3/4 h-12 mb-3" />
            <Skeleton className="w-1/2 h-6 mb-6" />

            {/* Macro Image Skeleton */}
            <div className="relative aspect-[16/10] rounded-xs overflow-hidden border border-white/10 mb-6">
              <Skeleton className="w-full h-full" />
            </div>

            <div className="space-y-2 mb-6">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-5/6 h-4" />
              <Skeleton className="w-4/6 h-4" />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex gap-4">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 w-28" />
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-64 h-6" />
            </div>

            {/* Specs Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>

            {/* Features Skeleton */}
            <Skeleton className="w-48 h-5 mb-4" />
            <div className="space-y-3 mb-8">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-11/12 h-5" />
              <Skeleton className="w-4/5 h-5" />
            </div>

            {/* Tags Skeleton */}
            <Skeleton className="w-36 h-4 mb-3" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="w-24 h-7" />
              <Skeleton className="w-32 h-7" />
              <Skeleton className="w-28 h-7" />
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsGallerySkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Featured Skeleton */}
      <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[600px] rounded-xs overflow-hidden border border-white/20 bg-black">
        <Skeleton className="w-full h-full absolute inset-0" />
        <div className="absolute top-6 left-6 flex gap-2">
          <Skeleton className="w-20 h-7" />
          <Skeleton className="w-24 h-7" />
        </div>
        <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B0B0E]/90 border border-white/20 rounded-xs space-y-3">
          <Skeleton className="w-48 h-4" />
          <Skeleton className="w-3/4 h-8" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>

      {/* Side Project Cards Skeleton */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-5 rounded-xs border border-white/10 bg-[#0E0E11] flex items-center gap-4"
          >
            <Skeleton className="w-20 h-20 flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="flex justify-between">
                <Skeleton className="w-16 h-3" />
                <Skeleton className="w-16 h-3" />
              </div>
              <Skeleton className="w-3/4 h-5" />
              <Skeleton className="w-1/2 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
