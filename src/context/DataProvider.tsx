import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface DataContextType {
    data: any[];
    
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider component
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);


  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook to use the DataContext
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

