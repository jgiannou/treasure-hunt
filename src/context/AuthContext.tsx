import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  hasCompletedRiddle: boolean;
  login: (code: string) => boolean;
  logout: () => void;
  setRiddleCompleted: (email: string) => void;
  selectedHero: string | null;
  setHeroSelected: (heroName: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const PROMO_CODE = "eldoria2025";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [hasCompletedRiddle, setHasCompletedRiddle] = useState(() => {
    return localStorage.getItem("hasCompletedRiddle") === "true";
  });

  const [selectedHero, setSelectedHero] = useState(() => {
    return localStorage.getItem("selectedHero");
  });

  const login = (code: string) => {
    if (code === PROMO_CODE) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const setRiddleCompleted = (email: string) => {
    setHasCompletedRiddle(true);
    localStorage.setItem("hasCompletedRiddle", "true");
    localStorage.setItem("userEmail", email);
  };

  const setHeroSelected = (heroName: string) => {
    setSelectedHero(heroName);
    localStorage.setItem("selectedHero", heroName);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasCompletedRiddle(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("hasCompletedRiddle");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("selectedHero");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        hasCompletedRiddle,
        login,
        logout,
        setRiddleCompleted,
        selectedHero,
        setHeroSelected,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
