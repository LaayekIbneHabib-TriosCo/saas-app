// root
import { Routes, Route, Navigate } from "react-router-dom";

// components
import routes from "./routes/routes";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
    });

  return (
    <Routes>
      {getRoutes(routes)}
      {/* auth */}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="*" element={<Navigate to="/admin/sign-up" />} />
      <Route path="*" element={<Navigate to="/admin/sign-in" />} />
      <Route path="*" element={<Navigate to="/admin/reset-password" />} />
      <Route path="*" element={<Navigate to="/client/view-only" />} />
      {/* app */}
      <Route path="*" element={<Navigate to="/admin/authenticated/add-clients" />} />
      <Route path="*" element={<Navigate to="/admin/authenticated/add-projects" />} />
    </Routes>
  );
}
