import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../Home/Home"))
const Plans = React.lazy(() => import("../Plans/Plans"))
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"))
const Videos = React.lazy(() => import("../Videos/Videos"))
const Contact = React.lazy(() => import("../Contact/Contact"))
const PageNotFound = React.lazy(() => import("../PageNotFound/PageNotFound"))

export const routes = () => {
    const pages = [
        { path: "/", component: <Home /> },
        { path: '/plans', component: <Plans />},
        { path: '/personal-health-dashboard', component: <Dashboard />},
        { path: '/videos', component: <Videos />},
        { path: '/contact-us', component: <Contact />},
        { path: "*", component: <PageNotFound />}
    ]
  
    return (
      <Suspense
        fallback={
          <h3 style={{ textAlign: "center", padding: "50px" }}>Loading...</h3>
        }
      >
        <Routes>
          {pages.map((page) => {
            return <Route path={page.path} exact element={page.component} />;
          })}
        </Routes>
      </Suspense>
    )
}