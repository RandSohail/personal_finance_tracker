import React from "react";
import { Image } from "../AntDesign";

const avatars = [
  "/assets/avatars/daniel.jpg",
  "/assets/avatars/elliot.jpg",
  "/assets/avatars/elyse.png",
  "/assets/avatars/helen.jpg",
  "/assets/avatars/jenny.jpg",
  "/assets/avatars/justen.jpg",
  "/assets/avatars/kristy.png",
  "/assets/avatars/matthew.png",
  "/assets/avatars/molly.png",
  "/assets/avatars/steve.jpg",
  "/assets/avatars/stevie.jpg",
  "/assets/avatars/veronika.jpg",
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
