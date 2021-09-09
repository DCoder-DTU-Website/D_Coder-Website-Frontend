import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { BlueButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { BlueLink as PrimaryLinkBase } from "components/misc/Links.js";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { Container as ContainerBase } from "components/misc/Layouts.js";
// import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

// import { Link } from "react-router-dom";
import api from "../../api/apiClient";
const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 text-center sm:text-justify`;
// const PrimaryLink = styled(PrimaryLinkBase)`
//   ${tw`inline-flex justify-center xl:justify-start items-center text-lg sm:mx-10`}
//   svg {
//     ${tw`ml-2 w-5 h-5`}
//   }
// `;
const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between p-10`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Card = tw.div`h-full flex! flex-col border-2 border-white max-w-sm rounded-tl-4xl rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 h-64 bg-cover bg-center rounded rounded-none rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`w-80 text-2xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-teal-500`}
`;

const GalPreview = () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const [sliderSettings] = useState({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1600,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const [cards, setCards] = useState([]);

  function SliderPlaying(x) {
    if (x) sliderRef?.slickPlay();
    else sliderRef?.slickPause();
  }

  const getPhotos = async () => {
    try {
      const images = await api.get("/gallery/all");
      const { data: gallery } = images.data;
      const galleryImgsAll = gallery.map((image) => ({
        imageSrc: image.image,
        width: 5,
        height: 5,
        title: image.title,
      }));
      const galleryImgs = galleryImgsAll.filter(
        (image) => image.title === "Code To School"
      );
      setCards(galleryImgs);
    } catch (err) {
      console.error(err, "Couldn't retrieve photos.");
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Gallery</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage
                onMouseEnter={() => SliderPlaying(true)}
                onMouseLeave={() => SliderPlaying(false)}
                imageSrc={card.imageSrc}
              />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
              </TextInfo>
            </Card>
          ))}
        </CardSlider>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default GalPreview;
