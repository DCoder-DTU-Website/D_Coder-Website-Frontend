import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import api from "../api/apiClient";


const Container = tw.div`relative px-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center flex flex-col justify-center items-center md:text-left`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col justify-center items-center max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-600`;

const SubmitButton = tw(
  PrimaryButtonBase
)`inline-block text-center bg-blue-600 hocus:bg-blue-800`;

const AddForm = ({
  submitButtonText = "Login",
  formAction = "#",
  formMethod = "get",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try {
      const val = await api.post("/login", {
        username: loginUsername,
        password: loginPassword,
      });
    } catch (err) {
      console.log("Could not retrieve user!", err);
    }
  };

  return (
    <Container>
      <div>
        <TextColumn>
          <TextContent>
            <Form action={formAction} method={formMethod}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Input
                  type="text"
                  placeholder="Username"
                  required
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <br />
              </div>
              <SubmitButton type="submit" onClick={login}>
                {submitButtonText}
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </div>
    </Container>
  );
};

export default AddForm;
