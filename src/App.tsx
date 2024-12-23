// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LandingAuth, LandingRiddle, LandingHeroes } from "./pages/landing";
import Clue from "./pages/Clue";
import { HeroDetails } from "./pages/HeroDetails";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingAuth />} />

          {/* Protected routes */}
          <Route
            path="/riddle"
            element={
              <ProtectedRoute>
                <LandingRiddle />
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
            path="/clue"
            element={
              <ProtectedRoute>
                <Clue />
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
