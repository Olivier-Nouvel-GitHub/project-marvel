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
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const LabelChoseAvatar = styled.label`
  display: block;
  text-align: center;
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

const InputGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  width: 14rem;
  padding-top: 1rem;
  display: block;
  margin-bottom: 5px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  border: 1px solid #084c7c;
  border-radius: 4px;

  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
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

  .error {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #8b0000;
    width: 14rem;
    text-align: center;
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

const Avatars = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    padding-right: 1rem;
    clip-path: circle(40% at 40%);
    cursor: pointer;
  }
`;

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),

    password: Yup.string()
      .required("Veuillez renseigner un mot de passe")
      .min(5, "Le mot de passe doit avoir au moins 5 caractères"),

    avatar: Yup.string().required("Veuillez choisir un avatar"),
  });
  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "", avatar: "" }}
        validationSchema={SigninSchema}
        onSubmit={async (values) => {
          try {
            createNewUser(values.email, values.password, values.avatar);
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
              <InputComponent>
                <Label htmlFor="email">Adresse mail</Label>
                <Field name="email" type="text" className="email-input" />
                <br />
                <ErrorMessage name="email" component="div" className="error" />
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
              <LabelChoseAvatar>Choisissez un avatar :</LabelChoseAvatar>
              <Avatars>
                <Field
                  type="radio"
                  name="avatar"
                  value="https://i.ibb.co/hmVRMx5/blackwidow.png"
                  id="avatar-blackwidow"
                />
                <label htmlFor="avatar-blackwidow">
                  <img
                    src="https://i.ibb.co/hmVRMx5/blackwidow.png"
                    alt="Black Widow"
                  />
                </label>

                <Field
                  type="radio"
                  name="avatar"
                  value="https://i.ibb.co/9bcFq2L/ironman.png"
                  id="avatar-ironman"
                />
                <label htmlFor="avatar-ironman">
                  <img
                    src="https://i.ibb.co/9bcFq2L/ironman.png"
                    alt="Iron Man"
                  />
                </label>

                <Field
                  type="radio"
                  name="avatar"
                  value="https://i.ibb.co/YWpSbkp/mask.png"
                  id="avatar-mask"
                />
                <label htmlFor="avatar-mask">
                  <img src="https://i.ibb.co/YWpSbkp/mask.png" alt="Mask" />
                </label>
                <Field
                  type="radio"
                  name="avatar"
                  value="https://i.ibb.co/4fwPJJ2/spiderman.png"
                  id="avatar-spiderman"
                />
                <label htmlFor="avatar-spiderman">
                  <img
                    src="https://i.ibb.co/4fwPJJ2/spiderman.png"
                    alt="Spider man"
                  />
                </label>
              </Avatars>
            </InputGroup>
            <Button type="submit">Envoyer</Button>
          </StyledForm>
        </LoginBox>
      </Formik>
    </Container>
  );
};
