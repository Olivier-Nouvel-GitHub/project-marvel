import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Error404 } from "./components/Error404";
import styled from "styled-components";
import "./main.css";

const AppStyle = styled.div`
  padding-top: 0.7rem;
  min-height: 40rem;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppStyle>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/comics" element={<Hero />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </AppStyle>
  </React.StrictMode>
);
