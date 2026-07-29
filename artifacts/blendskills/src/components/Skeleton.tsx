import React from 'react';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ className = '', style }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl ${className}`}
      style={style}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm space-y-4">
      <Skeleton className="h-44 w-full rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="pt-2 flex justify-between items-center">
        <Skeleton className="h-8 w-28 rounded-lg" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

export function VideoSkeleton() {
  return (
    <div className="relative w-full h-full min-h-[300px] rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between p-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-32 bg-slate-800" />
        <Skeleton className="h-6 w-6 rounded-full bg-slate-800" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-6 w-1/2 bg-slate-800" />
        <Skeleton className="h-4 w-3/4 bg-slate-800" />
      </div>
    </div>
  );
}
