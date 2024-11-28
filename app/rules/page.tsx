

import React from "react";
import "../../styles/rules.css";

const keyRules = [
  {
    id: 1,
    title: "Fair Play",
    description:
      "Players must always respect the referee, opponents, and maintain sportsmanship at all times.",
    image: "/fair.jpg",
  },
  {
    id: 2,
    title: "Game Duration",
    description:
      "Matches consist of two halves, each lasting 45 minutes, with a 15-minute halftime break.",
    image: "/duration.jpg",
  },
  {
    id: 3,
    title: "Team Composition",
    description:
      "Each team must consist of 11 players, including one goalkeeper.",
    image: "/composition.webp",
  },
  {
    id: 4,
    title: "Team Formation",
    description:
      "Teams can arrange their players in various formations, such as 4-4-2 or 4-3-3, depending on strategy.",
    image: "/formation.png",
  },
  {
    id: 5,
    title: "Substitutions",
    description:
      "Teams are allowed up to five substitutions during the match, with limits on breaks for substitution.",
    image: "/sub.jpg",
  },
  {
    id: 6,
    title: "Red & Yellow Cards",
    description:
      "Yellow cards are warnings; two result in a red card, which leads to ejection from the match.",
    image: "/cards.png",
  },
  {
    id: 7,
    title: "Fouls",
    description:
      "Foul play, including dangerous tackles and intentional handball, results in free kicks or penalties.",
    image: "/fouls.jpg",
  },
  {
    id: 8,
    title: "Offside",
    description:
      "An attacking player is offside if they're nearer to the opponent's goal line than both the ball and second-last defender when the ball is passed.",
    image: "/offside.png",
  },
];

const additionalRules = [
  "Direct passes to your own goalkeeper using hands are not allowed.",
  "Deliberate handball leads to a free kick or penalty.",
  "Extra time consists of two 15-minute halves in case of a draw.",
  "Penalty shootouts decide tied knockout matches.",
];

export default function RulesPage() {
  return (
    <div className="rules-page">
      {/* Header */}
      <h1 className="rules-header">Rules of Football</h1>

      {/* Key Rules Section */}
      <div className="rules-cards">
        {keyRules.map((rule) => (
          <div key={rule.id} className="rule-card">
            <img src={rule.image} alt={rule.title} className="rule-card-image" />
            <div className="rule-card-content">
              <h2 className="rule-card-title">{rule.title}</h2>
              <p className="rule-card-description">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Rules Section */}
      <div className="additional-rules">
        <h2 className="additional-rules-header">Additional Rules</h2>
        <ul className="additional-rules-list">
          {additionalRules.map((rule, index) => (
            <li key={index} className="additional-rule-item">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
