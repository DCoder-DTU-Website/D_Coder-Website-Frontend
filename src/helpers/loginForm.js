import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import api from "../api/apiClient";
import ResetModal from "./ResetModal";
import swal from "sweetalert";

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
)`inline-block text-center bg-blue-600 hocus:bg-blue-800 pt-2`;

const AddForm = ({ handleClose, setIsLoggedIn }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try {
      const { data } = await api.post("/login", {
        email: loginUsername,
        username: loginUsername,
        password: loginPassword,
      });
      console.log(data);
      localStorage.setItem("token", data);
      const res = await api.get("/user");
      setIsLoggedIn({ login: res.data });
      if (res.data.isAdmin) {
        swal({ title: "Welcome Admin!", icon: "success" });
      } else {
        swal({ title: "Successfully Logged In!", icon: "success" });
      }
    } catch (err) {
      swal({ title: "Incorrect Username or Password!", icon: "warning" });
    }
  };

  return (
    <Container>
      <div>
        <TextColumn>
          <TextContent>
            <Form>
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
              <SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                  login();
                  handleClose();
                }}
              >
                Login
              </SubmitButton>
              <ResetModal />
            </Form>
          </TextContent>
        </TextColumn>
      </div>
    </Container>
  );
};

export default AddForm;
