import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface DataContextType {
  data: any[]; // Adjust the type as needed for your data
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  addItem: (item: any) => void; // Example function to add data
  removeItem: (id: string) => void; // Example function to remove data by ID
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider component
export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any[]>([]);

  // Example function to add an item
  const addItem = (item: any) => {
    setData((prevData) => [...prevData, item]);
  };

  // Example function to remove an item by ID
  const removeItem = (id: string) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <DataContext.Provider value={{ data, setData, addItem, removeItem }}>
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

