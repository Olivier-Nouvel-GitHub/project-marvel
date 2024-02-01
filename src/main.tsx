import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroesList } from "./components/HeroesList";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Error404 } from "./components/Error404";
import { Accueil } from "./components/Accueil";
import { Doc } from "./components/Doc";
import { Register } from "./components/Register";
import styled from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./main.css";

const AppStyle = styled.div`
  padding-top: 0.7rem;
  min-height: 40rem;
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppStyle>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/register" element={<Register />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/heroesList" element={<HeroesList />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/doc" element={<Doc />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </AppStyle>
    </Provider>
  </React.StrictMode>
);
