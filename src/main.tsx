import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { HeroesList } from "./components/HeroesList";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Error404 } from "./components/Error404";
import { Doc } from "./components/Doc";
import { Authent } from "./components/Authent";
import { Register } from "./components/Register";
import { FavList } from "./components/FavList";
import styled from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./main.css";
import "firebase/database";

const AppStyle = styled.div`
  padding-top: 0.7rem;
  min-height: 40rem;
`;

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppStyle>
        <Router>
          <Routes>
            <Route path="/" element={<Authent />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/heroesList"
              element={
                <ProtectedRoutes>
                  <Header />
                  <HeroesList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/hero"
              element={
                <ProtectedRoutes>
                  <Header />
                  <Hero />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoutes>
                  <Header />
                  <FavList />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doc"
              element={
                <ProtectedRoutes>
                  <Header />
                  <Doc />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </AppStyle>
    </Provider>
  </React.StrictMode>
);
