import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ rooms, name, isOn, handleToggle }) {
  // const [isOn, setIsOn] = useState(false);

  return (
    <LightButton
      type="button"
      name={name}
      onToggle={() => {
        handleToggle(rooms.id);
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
