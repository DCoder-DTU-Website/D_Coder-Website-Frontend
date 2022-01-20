import React, { useEffect } from "react";
import "./TeamCard.css";
import { TeamCardsData } from "./TeamCards_Data";
import LinkedIn from "@material-ui/icons/LinkedIn";

class TeamCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = TeamCardsData
  }
  render() {
    return (
      <div className="TeamCards__Container">
        <ul className="TeamCards__list-members">
          {this.state.map((data, idx) => {
            return (
              <li className="TeamCards__members">
                <div className="TeamCards__member-image">
                  <img src={data.image} alt="" key={idx} />
                </div>
                <div className="TeamCards__member-info">
                  <h3 key={idx}>{data.name}</h3>
                  <p key={idx}>{data.postion}</p>
                  <div className="TeamCards__social-link">
                    <a href={data.links} target="_blank">
                      <LinkedIn className="fab" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TeamCards;
