import Head from "next/head";
import React, { useState } from "react";
import { GameBoard } from "../components/GameBoard";
import { Heading } from "../components/Heading";
import { List } from "../components/List";
import { ListItem } from "../components/ListItem";
import { MainBody } from "../components/MainBody";
import { Overlay } from "../components/Overlay";
import { Scoresheet } from "../components/Scoresheet";

export default function Home() {
  const items = [
    { key: "rock", value: "ROCK" },
    { key: "paper", value: "PAPER" },
    { key: "scissors", value: "SCISSORS" },
  ];
  const [showOverlay, setShowOverlay] = useState(false);
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
            <div style={{ color: "#5B596E" }}>12</div>
          </Scoresheet>
        </Heading>
        <GameBoard>
          <div
            style={{
              gridArea: "paper",
              border: "10px solid #5671F4",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/icon-paper.svg" alt="Paper" />
          </div>
          <div
            style={{
              gridArea: "scissors",
              border: "10px solid #EEA52E",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/icon-scissors.svg" alt="Scissors" />
          </div>
          <div
            style={{
              gridArea: "rock",
              border: "10px solid #DE465A",
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/icon-rock.svg" alt="Rock" />
          </div>
        </GameBoard>
        <Scoresheet
          style={{ justifySelf: "end", cursor: "pointer" }}
          onClick={() => {
            setShowOverlay((curr) => !curr);
          }}
        >
          RULES
        </Scoresheet>

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
