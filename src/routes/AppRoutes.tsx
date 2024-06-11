import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../presentation/components/Dashboard';
import { pageRoutes } from './pageRoutes';

const AppRoutes= () => {

  const LayoutPage = React.lazy(() => import("../presentation/pages/LayoutPage"));
  const NoPage = React.lazy(() => import("../presentation/pages/NoPage"));

  return (
    <Routes>
      <Route path={pageRoutes.INDEX} element={<Suspense fallback=""><LayoutPage children={<Dashboard />} /></Suspense>} />
      <Route path={pageRoutes.NOPAGE} element={<NoPage />} />
    </Routes>
  )
}

export default AppRoutes