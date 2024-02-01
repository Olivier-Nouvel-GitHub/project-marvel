import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #9cd1d5;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  border: 1px solid grey;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #4cae4c;
  }
`;

export const Register = () => {
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Email invalide").required("Obligatoire"),

    password: Yup.string().required("Veuillez renseigner un mot de passe"),
  });
  return (
    <Container>
      <LoginBox>
        <Form action="/submit-your-login-form" method="post">
          <Title>Créer un compte</Title>
          <InputGroup>
            <Label htmlFor="username">Adresse mail</Label>
            <Input type="text" id="username" name="username" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Mot de passe</Label>
            <Input type="password" id="password" name="password" required />
          </InputGroup>
          <Button type="submit">Envoyer</Button>
        </Form>
      </LoginBox>
    </Container>
  );
};

const email = "test@test.test";
const password = "testtest";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("Nouvel utilisateur créé avec UID :", user.uid);
  })
  .catch((error) => {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  });
