import React, { createContext, useContext, useState, useEffect } from 'react';

interface InternetIdentityContextType {
  isAuthenticated: boolean;
  principal: string | null;
  login: () => Promise<void>;
  logout: () => void;
}

const InternetIdentityContext = createContext<InternetIdentityContextType | undefined>(undefined);

export const InternetIdentityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState<string | null>(null);

  const login = async () => {
    try {
      // Placeholder for Internet Identity login logic
      // In a real implementation, this would integrate with Internet Computer's II
      console.log('Login initiated');
      setIsAuthenticated(true);
      setPrincipal('sample-principal-id');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPrincipal(null);
  };

  useEffect(() => {
    // Check for existing session on mount
    // This is where you'd check for stored authentication
  }, []);

  return (
    <InternetIdentityContext.Provider value={{ isAuthenticated, principal, login, logout }}>
      {children}
    </InternetIdentityContext.Provider>
  );
};

export const useInternetIdentity = () => {
  const context = useContext(InternetIdentityContext);
  if (context === undefined) {
    throw new Error('useInternetIdentity must be used within an InternetIdentityProvider');
  }
  return context;
};
