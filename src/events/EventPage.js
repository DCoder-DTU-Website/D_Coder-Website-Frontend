import React, { useState } from "react";
import "style.css";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import EvtCard from "./components/EvtCard";

import fakeData from "./data";
import WinnerCard from "./components/WinnerCard";
import Winners from "./components/Winners";

const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;
const Subheading = tw.h3`text-3xl mt-5 font-bold text-primary-500`;
const Content = tw.div`mt-16`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

function EventPage() {
  const [evtData, setEvtData] = useState(fakeData);

  const upcomingEvents = evtData.upcomingEvents.map((evt, i) => (
    <EvtCard
      key={i}
      count={i}
      title={evt.title}
      desc={evt.description}
      img={evt.image}
      schedule={evt.schedule}
    />
  ));

  const previousEvents = evtData.previousEvents.map((evt, i) => (
    <EvtCard
      key={i}
      count={i}
      title={evt.title}
      desc={evt.description}
      img={evt.image}
      schedule={evt.schedule}
    />
  ));

  const winners = evtData.winners.map((winner, i) => (
    <WinnerCard
      key={i}
      name={winner.name}
      img={winner.image}
      pos={winner.position}
      links={winner.links}
      evt={winner.event}
    />
  ));

  // const fetchMoreEvts = () => {
  //   previousEvents = previousEvents * 2;
  // };

  return (
    // <InfiniteScroll
    //   dataLength={previousEvents.length}
    //   next={fetchMoreEvts}
    //   hasMore={true}
    //   loader={<h4>Loading...</h4>}
    //   endMessage={<h1>Done</h1>}
    // >
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Events</HeadingTitle>
        </HeadingInfoContainer>
        <section>
          <HeadingInfoContainer>
            <Subheading>Upcoming Events</Subheading>
          </HeadingInfoContainer>
          <Content>{upcomingEvents}</Content>
        </section>
        <section>
          <Winners winners={winners} />
        </section>
        <section>
          <HeadingInfoContainer>
            <Subheading>Previous Events</Subheading>
          </HeadingInfoContainer>
          <Content>{previousEvents}</Content>
        </section>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
    // </InfiniteScroll>
  );
}

export default EventPage;
