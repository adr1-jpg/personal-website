import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of the NavState
interface NavState {
  currentState: string;
  scrollHeight: number
}

// Define the structure of the context
interface DataContextProps {
  navState: NavState;
  setNavState: React.Dispatch<React.SetStateAction<NavState>>;
}

// Create the context with default undefined value
export const DataContext = createContext<DataContextProps | undefined>(undefined);

// The provider component to share the state
const FormProvider = ({ children }: { children: ReactNode }) => {
  const [navState, setNavState] = useState<NavState>({
    currentState: 'home',
    scrollHeight: 0,
  });

  return (
    <DataContext.Provider value={{ navState, setNavState }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access the context
export const useForm = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

// DataProvider wrapper for context
export function DataProvider(props: { children: ReactNode }) {
  return <FormProvider>{props.children}</FormProvider>;
}




