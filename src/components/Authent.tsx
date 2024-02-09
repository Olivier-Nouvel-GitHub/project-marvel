import styled from "styled-components";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setAuthenticatedUser } from "../redux/slices/userSlice";
import { UserType } from "../types/UserType";
import { useDispatch } from "react-redux";
import { fetchUserDetails } from "../services/firebase/fetch.user.details";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding-top: 1rem;
  padding-bottom: 2rem;

  .error {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #8b0000;
    width: 100%;
    text-align: center;
  }
`;

const StyledForm = styled(Form)`
  margin-top: -3rem;
`;

const LoginBox = styled.div`
  background-color: #9cd1d5;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const InputField = styled.div`
  padding-bottom: 1rem;
  border: 1px solid #084c7c;
  border-radius: 4px;
  margin-bottom: 2rem;
  padding-right: 1rem;
`;

const InputGroup = styled.div`
  padding-left: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Label = styled.label`
  width: 14rem;
  padding-top: 1rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;

  padding-top: 0.5rem;
  margin-bottom: 1rem;

  .email-input {
    width: 14rem;
    padding: 0.4rem;
    border: solid 1px;
    border-radius: 4px;
  }

  .password-input {
    width: 14rem;
    padding: 0.4rem;
    border: solid 1px;
    border-radius: 4px;
  }
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

export const Authent = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),

    password: Yup.string()
      .required("Veuillez renseigner un mot de passe")
      .min(5, "Le mot de passe doit avoir au moins 5 caractères"),
  });
  const userAuthenticated = (user: UserType) => {
    dispatch(setAuthenticatedUser(user));
  };
  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
            const firebaseUser = userCredential.user;
            const userDetails = await fetchUserDetails(firebaseUser.uid);
            const user: UserType = {
              email: firebaseUser.email,
              avatar: userDetails.avatar,
              fav: userDetails.fav,
            };
            userAuthenticated(user);
            console.log(user);
          } catch (error) {
            setErrorMessage("Identifiants invalides");
          }
        }}
      >
        <LoginBox>
          <StyledForm>
            <div className="error">{errorMessage}</div> <br />
            <Title>Connexion</Title>
            <InputField>
              <InputGroup>
                <InputComponent>
                  <Label htmlFor="email">Adresse mail</Label>
                  <Field name="email" type="text" className="email-input" />
                  <br />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <br />
                </InputComponent>
              </InputGroup>
              <InputGroup>
                <InputComponent>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Field
                    name="password"
                    type="password"
                    className="password-input"
                  />
                  <br />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <br />
                </InputComponent>
              </InputGroup>
            </InputField>
            <InputGroup>
              <ErrorMessage name="avatar" component="div" className="error" />
            </InputGroup>
            <Button type="submit">Envoyer</Button>
          </StyledForm>
        </LoginBox>
      </Formik>
    </Container>
  );
};
