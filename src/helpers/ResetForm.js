import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import api from "../api/apiClient";
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
)`inline-block text-center bg-blue-600 hocus:bg-blue-800`;

const AddForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const data = { email: email };
  const login = async () => {
    const msg = await api.post("reset-pass", data);
    console.log(msg);
    if (msg.data.message === "No such user exist !") {
      swal({
        title: msg.data.message,
        icon: "error",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
    } else {
      swal({
        title: msg.data.message,
        icon: "success",
        buttons: true,
        closeOnClickOutside: true,
        closeOnEsc: true,
      });
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
                  type="email"
                  placeholder="Enter Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </div>
              <SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                Send Mail
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </div>
    </Container>
  );
};

export default AddForm;
