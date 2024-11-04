import React from "react";
import { Image } from "./AntDesign";
import daniel from "../assets/avatars/daniel.jpg";
import elliot from "../assets/avatars/elliot.jpg";
import elyse from "../assets/avatars/elyse.png";
import helen from "../assets/avatars/helen.jpg";
import jenny from "../assets/avatars/jenny.jpg";
import justen from "../assets/avatars/justen.jpg";
import kristy from "../assets/avatars/kristy.png";
import matthew from "../assets/avatars/matthew.png";
import molly from "../assets/avatars/molly.png";
import steve from "../assets/avatars/steve.jpg";
import stevie from "../assets/avatars/stevie.jpg";
import veronika from "../assets/avatars/veronika.jpg";

const avatars = [
  daniel,
  elliot,
  elyse,
  helen,
  jenny,
  justen,
  kristy,
  matthew,
  molly,
  steve,
  stevie,
  veronika,
];

export default function RandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  const randomImage = avatars[randomIndex];

  return (
    <Image
      preview={false}
      style={{ width: "150px", borderRadius: "100%" }}
      src={randomImage}
      alt="Random Avatar"
    />
  );
}
