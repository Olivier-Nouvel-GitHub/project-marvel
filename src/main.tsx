import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroesList } from "./components/HeroesList";
import { Header } from "./components/Header";
import { Error404 } from "./components/Error404";
import { Accueil } from "./components/Accueil";
import { Doc } from "./components/Doc";
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
          <Route path="/" element={<Accueil />} />
          <Route path="accueil" element={<Accueil />} />
          <Route path="/comics" element={<HeroesList />} />
          <Route path="doc" element={<Doc />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </AppStyle>
  </React.StrictMode>
);
