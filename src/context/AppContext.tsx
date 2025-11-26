
import { createContext, useState, useContext, type ReactNode } from "react";
import type User  from "../types/user";
import type Policy from "../types/policy";
import  users  from "../data/user";
import  rawPolicies  from "../data/policy";


interface AppContextType {
  allUsers: User[];
  setAllUsers: React.Dispatch<React.SetStateAction<User[]>>;
  allPolicies: Policy[];
  setAllPolicies: React.Dispatch<React.SetStateAction<Policy[]>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<User[]>(users);
  const [allPolicies, setAllPolicies] = useState<Policy[]>(rawPolicies);

  return (
    <AppContext.Provider value={{ allUsers, setAllUsers, allPolicies, setAllPolicies }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
