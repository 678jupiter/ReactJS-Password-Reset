import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RestPass from "./pages/Auth/RestPass";
import { NotFound } from "./pages/NotFound";
import { GlobalDebug } from "./utils/wsgi";
function App() {
  useEffect(() => {
    (process.env.NODE_ENV === "production" ||
      process.env.REACT_APP_ENV === "STAGING") &&
      GlobalDebug(false);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<RestPass />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/auth/reset-password" element={<RestPass />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default App;
