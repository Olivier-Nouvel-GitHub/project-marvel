import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { createNewUser } from "../services/firebase/firebase.create.user";

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

const StyledForm = styled.form`
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
  const [errorMessage, setErrorMessage] = useState();
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Email invalide").required("Obligatoire"),

    password: Yup.string().required("Veuillez renseigner un mot de passe"),
  });
  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          try {
            createNewUser();
          } catch (error) {
            setErrorMessage("Identifiants invalides");
          }
        }}
      >
        <LoginBox>
          <StyledForm>
            <div className="error">{errorMessage}</div> <br />
            <Title>Créer un compte</Title>
            <InputGroup>
              <Input>
                <Label htmlFor={email}>Adresse mail</Label>
                <Field name="email" type="text" className="email-input" />
                <br />
                <ErrorMessage name="email" component="div" className="error" />
                <br />
              </Input>
            </InputGroup>
            <InputGroup>
              <Input>
                <Label htmlFor={password}>Adresse mail</Label>
                <Field
                  name="password"
                  type="password"
                  className="authent-input"
                />
                <br />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
                <br />
              </Input>
            </InputGroup>
            <Button type="submit">Envoyer</Button>
          </StyledForm>
        </LoginBox>
      </Formik>
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
