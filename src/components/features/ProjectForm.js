import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/projectUpload.svg";
import Upload from "./Upload/Upload";
import Textarea from "./Textarea";

const Container = tw.div`relative px-10`;
const TwoColumn = tw.div`flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-blue-600`;
// const Textarea = styled(Input).attrs({ as: "textarea" })`
//   ${tw`h-24 w-full `}
// `;

const SubmitButton = tw(
  PrimaryButtonBase
)`inline-block mt-8 bg-blue-600 hocus:bg-blue-800`;

export default ({
  submitButtonText = "Upload",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <TextColumn>
          <Textarea rows={7} cols={50} limit={300} value="" />,
          <Upload />
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Form action={formAction} method={formMethod}>
              <Input
                type="text"
                name="name"
                placeholder="Project Name"
                required
              />
              <Input type="text" name="github" placeholder="Github" required />
              <Input
                type="text"
                name="linkedin"
                placeholder="Linkedin"
                required
              />
              <Input
                type="text"
                name="techstack"
                placeholder="Tech Stack"
                required
              />
              <br />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
