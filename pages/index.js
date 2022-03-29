import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { GameBoard } from "../components/GameBoard";
import { Heading } from "../components/Heading";
import { List } from "../components/List";
import { ListItem } from "../components/ListItem";
import { MainBody } from "../components/MainBody";
import { Overlay } from "../components/Overlay";
import { Picks } from "../components/Picks";
import { Scoresheet } from "../components/Scoresheet";

export default function Home() {
  const items = [
    { key: "rock", value: "ROCK", image: "/icon-rock.svg", color: "#DE465A" },
    {
      key: "paper",
      value: "PAPER",
      image: "/icon-paper.svg",
      color: "#5671F4",
    },
    {
      key: "scissors",
      value: "SCISSORS",
      image: "/icon-scissors.svg",
      color: "#EEA52E",
    },
  ];

  //cache who beats who
  const rules = { paper: "rock", rock: "scissors", scissors: "paper" };
  const [showOverlay, setShowOverlay] = useState(false);
  const [housePick, setHousePick] = useState(null);
  const [pick, setPick] = useState(null);
  const [outcome, setOutcome] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (rules[pick?.key] === housePick?.key) {
      setScore((previous) => previous + 1);
    }
    if (rules[housePick?.key] === pick?.key) {
      {
        setScore((previous) => previous - 1);
      }
    }
  }, [housePick]);
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta name="description" content="Rock Paper Scissors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainBody>
        <Heading>
          <div>
            <List>
              {items.map((item) => (
                <ListItem key={item.key}>{item.value}</ListItem>
              ))}
            </List>
          </div>

          <Scoresheet>
            <div style={{ color: "#555EAB" }}>SCORE</div>
            <div style={{ color: "#5B596E" }}>{score}</div>
          </Scoresheet>
        </Heading>
        {pick === null && (
          <GameBoard>
            {items.map((item) => (
              <div
                key={item.key}
                style={{
                  gridArea: `${item.key}`,
                  border: `10px solid ${item.color}`,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setPick(item);
                  setHousePick(items[Math.floor(Math.random() * items.length)]);
                }}
              >
                <img src={item.image} alt={item.key} />
              </div>
            ))}
          </GameBoard>
        )}

        {pick !== null && (
          <Picks>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "2vh",
                textAlign: "center",
                width: "30%",
              }}
            >
              You picked
              <div
                style={{
                  border: `10px solid ${pick.color}`,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={pick.image} alt={pick.key} />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "2vh",
                textAlign: "center",
                width: "30%",
              }}
            >
              You{" "}
              {pick.key === housePick.key
                ? "drew"
                : rules[pick.key] === housePick.key
                ? "won"
                : "lost"}
              <Button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPick(null);
                }}
              >
                Play Again
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "2vh",
                textAlign: "center",
                width: "30%",
              }}
            >
              The House picked
              <div
                style={{
                  border: `10px solid ${housePick.color}`,
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={housePick.image} alt={housePick.key} />
              </div>
            </div>
          </Picks>
        )}
        <Button
          style={{ justifySelf: "end", cursor: "pointer" }}
          onClick={() => {
            setShowOverlay((curr) => !curr);
          }}
        >
          RULES
        </Button>

        {showOverlay && (
          <Overlay>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignSelf: "start",
                width: "90%",
                margin: "auto",
                marginTop: "5px",
              }}
            >
              <span>RULES</span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowOverlay((curr) => !curr);
                }}
              >
                X
              </span>
            </div>

            <div>
              <img src="/image-rules.svg" alt="Rules" />
            </div>
          </Overlay>
        )}
      </MainBody>
    </>
  );
}
