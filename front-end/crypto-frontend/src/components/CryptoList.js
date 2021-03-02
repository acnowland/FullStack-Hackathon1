import React from "react";
import Card from "./Card";
import "./Card.css"

export default function CryptoList(props) {

  const displayCryptoList = () => {
    return props.cryptos.map((crypto) => {
      return <Card key={crypto.nameid} crypto={crypto} />;
    });
  };

  return <ul className="list-container">{displayCryptoList()}</ul>;
}
