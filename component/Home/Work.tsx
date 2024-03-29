import React from "react";

interface Props {
  children: React.ReactNode;
}

export const WorkContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    <div className="bg-black h-[40vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.8));

  return (
    <div
      className="flex flex-col sm:items-center lg:items-start justify-center text-3xl lg:text-3xl h-[30vh] lg:pl-24 lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  page: number;
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress, page }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.8));

  return (
    <div
      className={`flex flex-1 lg:items-center justify-center h-screen bg-gradient-to-b from-white to-light-white`}
      style={{ transform: `translateY(${page !== 3 ? translateY : 0}px)` }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};
