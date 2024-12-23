import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getUserHero } from "../lib/supabase";

interface AuthContextType {
  isAuthenticated: boolean;
  hasCompletedRiddle: boolean;
  login: (code: string) => boolean;
  logout: () => void;
  setRiddleCompleted: (email: string) => boolean;
  selectedHero: string | null;
  setHeroSelected: (heroName: string) => void;
  userEmail: string | null;
  checkUserHero: () => Promise<void>;
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

  const [selectedHero, setSelectedHero] = useState<string | null>(() => {
    return localStorage.getItem("selectedHero");
  });

  const [userEmail, setUserEmail] = useState<string | null>(() => {
    return localStorage.getItem("userEmail");
  });

  useEffect(() => {
    if (userEmail) {
      checkUserHero();
    }
  }, [userEmail]);

  const login = (code: string) => {
    if (code.toLowerCase() === PROMO_CODE.toLowerCase()) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    }
    return false;
  };

  const setRiddleCompleted = (email: string) => {
    if (!email.includes("@")) {
      return false;
    }
    setHasCompletedRiddle(true);
    setUserEmail(email);
    localStorage.setItem("hasCompletedRiddle", "true");
    localStorage.setItem("userEmail", email);
    return true;
  };

  const setHeroSelected = (heroName: string) => {
    setSelectedHero(heroName);
    localStorage.setItem("selectedHero", heroName);
  };

  const checkUserHero = async () => {
    if (!userEmail) return;

    const heroName = await getUserHero(userEmail);
    if (heroName) {
      setHeroSelected(heroName);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasCompletedRiddle(false);
    setSelectedHero(null);
    setUserEmail(null);
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
        userEmail,
        checkUserHero,
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
