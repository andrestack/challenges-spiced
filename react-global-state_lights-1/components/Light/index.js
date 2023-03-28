import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import useLightsStore from "../../store/lighhtsStore";

export default function Light({ name }) {
  const { isOn, id } = (useLightsStore((state) => state.lights)).find(
    (light) => light.name === name
  );
  const toggleLight = useLightsStore((state) => state.toggleLight);
  
  function handleToggle() {
    toggleLight(id);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      isOn={isOn}
      
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
