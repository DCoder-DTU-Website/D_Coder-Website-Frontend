import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Modal from "./modal";
import api from "../../api/apiClient";

const Container = tw.div`relative bg-gray-900 -m-8`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 flex-shrink-0 h-80 md:h-80 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-blue-600 -mt-4`;
const Title = tw.h4`float-left mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-white`;
const Description = tw.p`mt-2 text-sm leading-loose text-white`;
const Link = tw.a`inline-block mt-4 text-sm text-blue-600 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-600`;

const linkstyle = {
  display: "flex",
  gap: "20px",
};

const ProjectsComp = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { data } = await api.get("/project/all");
      const { data: projectsData } = data;
      setProjects(projectsData);
    } catch (err) {
      console.log("Could not retrieve Projects!", err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container>
      <SingleColumn>
        <Modal />
        <Content>
          {projects.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.image} />
              <Details>
                <Title>{card.title}</Title>
                <br />
                <br />
                <br />
                <br />
                <Subtitle>{card.techStack}</Subtitle>
                <Description>{card.desc}</Description>
                <div className="links" style={linkstyle}>
                  <Link href={card.github}>Github</Link>
                  <Link href={card.linkedin}>{card.dev}</Link>
                </div>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  );
};

export default ProjectsComp;
