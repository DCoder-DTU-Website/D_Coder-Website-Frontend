import React, { useState, useEffect } from "react";
import api from "../../api/apiClient";

import tw from "twin.macro";
import "style.css";
import "tailwindcss/dist/base.css";
import Hero from "components/hero/SplashScreenWithHeading";
import Footer from "components/footers/Footer";
import { ReactComponent as SvgDotPatternIcon } from "images/dot-pattern.svg";

import "./App.css";
import EvtCard from "./components/EvtCard";
import fakeData from "./data";
import WinnerCard from "./components/WinnerCard";
import Winners from "./components/Winners";

const Container = tw.div`relative bg-gray-900`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Subheading = tw.h3`text-3xl mt-5 font-bold text-blue-600`;
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
  const [evtsB, setEvtsB] = useState([]);

  const getEvents = async () => {
    try {
      const { data } = await api.get("/event/all");
      const { data: evts } = data;
      evts.forEach((evt) => {
        evt.startDate = Date.parse(evt.startDate);
        evt.endDate = Date.parse(evt.endDate);
      });
      setEvtsB(evts);
    } catch (err) {
      console.log("Could not retrieve Events!", err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const upcomingEventsData = evtsB.filter(
    (evt) => evt.endDate - Date.now() >= 0
  );

  upcomingEventsData.sort((a, b) => a.startDate - b.startDate);

  const previousEventsData = evtsB.filter(
    (evt) => evt.endDate - Date.now() < 0
  );

  previousEventsData.sort((a, b) => a.startDate - b.startDate);

  const upcomingEvents = upcomingEventsData.map((evt, i) => (
    <EvtCard
      key={i}
      count={i}
      title={evt.title}
      desc={evt.desc}
      img={evt.image}
      startDate={evt.startDate}
      endDate={evt.endDate}
    />
  ));

  // const upcomingEvents = evtData.upcomingEvents.map((evt, i) => (
  //   <EvtCard
  //     key={i}
  //     count={i}
  //     title={evt.title}
  //     desc={evt.description}
  //     img={evt.image}
  //     schedule={evt.schedule}
  //   />
  // ));

  const previousEvents = previousEventsData.map((evt, i) => (
    <EvtCard
      key={i}
      count={i}
      title={evt.title}
      desc={evt.desc}
      img={evt.image}
      startDate={evt.startDate}
      endDate={evt.endDate}
    />
  ));

  // const previousEvents = evtData.previousEvents.map((evt, i) => (
  //   <EvtCard
  //     key={i}
  //     count={i}
  //     title={evt.title}
  //     desc={evt.description}
  //     img={evt.image}
  //     schedule={evt.schedule}
  //   />
  // ));

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

  return (
    <>
      <Hero title="Events" />
      <Container className="EventPage-root">
        <SingleColumn>
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
      <Footer />
    </>
  );
}

export default EventPage;
