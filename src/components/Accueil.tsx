import styled from "styled-components";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Authent } from "../components/authent";
import { Register } from "../components/Register";
import { UserType } from "../types/UserType";

const AccueilStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9cd1d5;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Intro = styled.div`
  color: #084c7c;
  font-size: 1.3rem;

  a:link,
  a:visited,
  a:hover {
    color: #55471e;
  }

  p {
    margin-top: 2rem;
  }
  font-size: 1.3rem;
`;

export const Accueil = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //  setUser(authUser);
      console.log(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <div>{user ? <Register /> : <div>bienvenue</div>}</div>;
};
