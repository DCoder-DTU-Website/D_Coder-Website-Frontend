import { Container } from "semantic-ui-react";
import Card from "../cards/Card";
import AOS from "aos";
import "aos/dist/aos.css";
// semantic-ui

function Posts({ cardData, loading }) {
  AOS.init();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const renderCards = () => {
    const cards = cardData.map((data, index) => (
      <Card index={index} data={data} key={data.id} />
    ));
    return cards;
  };
  return <Container>{renderCards()}</Container>;
}
export default Posts;
