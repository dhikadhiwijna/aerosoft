import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";

interface RouteValue {
  route: string;
}

interface Observer {
  children: React.ReactNode;
}

export const RouteContext = React.createContext<RouteValue>({ route: "/" });

const RouteObserver: React.FC<Observer> = ({ children }) => {
  const router = useRouter();

  return (
    <RouteContext.Provider value={{ route }}>{children}</RouteContext.Provider>
  );
};

export default RouteObserver;
