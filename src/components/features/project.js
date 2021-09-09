import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Modal from "./modal";
import api from "../../api/apiClient";
import useUser from "../../useUser";
import "../../pages/events/components/EvtCard1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";

const Container = tw.div`relative bg-gray-900 -m-8`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-72 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-blue-600 -mt-4`;
const Title = tw.h4`float-left mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight text-white`;
const Description = tw.p`mt-2 text-sm leading-loose text-white text-justify`;
const Link = tw.a`inline-block mt-4 text-sm text-blue-600 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-600`;
const Subheading = tw.h3`text-5xl mt-5 font-bold text-blue-600 text-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const Subheading = tw.h3`text-5xl mt-5 font-bold text-blue-600`;
const linkstyle = {
  display: "flex",
  gap: "20px",
};

const ProjectsComp = () => {
  const [projects, setProjects] = useState([]);
  const { user } = useUser();
  const isUser = user && !user.isAdmin;
  AOS.init();

  const getProjects = async () => {
    try {
      const { data } = await api.get("/project/all");
      const { data: projectsData } = data;
      let val = projectsData.filter((e) => e.confirmed);
      setProjects(val);
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
        {isUser && <Modal />}
        <Content>
          {projects.map((card, i) => (
            <Card
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              key={i}
              reversed={i % 2 === 1}
            >
              <Image className="EvtCard-img" imageSrc={card.image} />
              <Details>
                <Title>{card.title}</Title>
                <br />
                <br />
                <br />
                <br />
                <Subtitle>{card.techStack}</Subtitle>
                <Description>{card.desc}</Description>
                <div
                  className="links"
                  style={linkstyle}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                  }}
                >
                  <Link target="_blank" href={card.github}>
                    <AiFillGithub size={25} />
                  </Link>
                  {/* <Link target="_blank" href={card.linkedin}>
                    {card.dev}
                  </Link> */}
                </div>
              </Details>
            </Card>
          ))}
        </Content>
        <br />
        <br />
        <HeadingInfoContainer>
          <Subheading style={{ color: "#73c2fb" }}>Major Projects</Subheading>
        </HeadingInfoContainer>
        <Content style={{ marginTop: "-100px" }}>
          <Card
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={0}
            reversed={true}
          >
            <Image
              className="EvtCard-img"
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
              imageSrc="https://res.cloudinary.com/dumgn8uvd/image/upload/v1623168872/acciojob_tcnetd.png"
            />
            <Details>
              <Title>Accio Job</Title>
              <br />
              <br />
              <br />
              <br />
              {/* <Subtitle>techstack</Subtitle> */}
              <Description>
                We, at D_CODER recently completed our one of the most ambitious
                industry project with AccioJob, handled by a team of 15
                dedicated students, from the society, as software developer from
                December to February. Our innovative brains designed 100+
                placement oriented questions on various topics like heaps,
                sorting arrays, stacks, etc ranging from easy to medium level of
                difficulty that could enhance the skills of the technical
                fellows in one of the most important topic for placements, Data
                Structures and Algorithms and help them in their placement
                journey.
              </Description>
              <div
                className="links"
                style={linkstyle}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                {/* <Link target="_blank" href={card.github}>
                  <AiFillGithub size={25} />
                </Link> */}
                {/* <Link target="_blank" href={card.linkedin}>
                    {card.dev}
                  </Link> */}
              </div>
            </Details>
          </Card>
        </Content>
      </SingleColumn>
    </Container>
  );
};

export default ProjectsComp;
