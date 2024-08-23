import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { routes } from "../../router/routes";
import Error from "../../pages/Error"

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      )}
      <Route path="error" element={<Error />} />
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  )
}

export default AppRouter