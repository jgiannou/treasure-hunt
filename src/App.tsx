// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LandingAuth, LandingRiddle, LandingHeroes } from "./pages/landing";
import Clue from "./pages/Clue";
import { HeroDetails } from "./pages/HeroDetails";
import { HeroIntro } from "./pages/HeroIntro";

// Νέο component για έλεγχο riddle
function RiddleCheck({ children }: { children: JSX.Element }) {
  const { hasCompletedRiddle } = useAuth();

  if (hasCompletedRiddle) {
    return <Navigate to="/heroes" />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public route με έλεγχο για riddle */}
          <Route
            path="/"
            element={
              <RiddleCheck>
                <LandingAuth />
              </RiddleCheck>
            }
          />

          {/* Protected routes */}
          <Route
            path="/riddle"
            element={
              <ProtectedRoute>
                <RiddleCheck>
                  <LandingRiddle />
                </RiddleCheck>
              </ProtectedRoute>
            }
          />
          <Route
            path="/heroes"
            element={
              <ProtectedRoute>
                <LandingHeroes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hero/:heroId"
            element={
              <ProtectedRoute>
                <HeroDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hero-intro"
            element={
              <ProtectedRoute>
                <HeroIntro />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clue"
            element={
              <ProtectedRoute>
                <Clue />
              </ProtectedRoute>
            }
          />
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
