import styled from "styled-components";
import Light from "../Light";
import useLightsStore from "../../store/lighhtsStore";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const lights = useLightsStore((state) => state.lights);

  return (
    <StyledLights>
      {lights.map(({ id, name }) => {
        return (
          <li key={id}>
            <Light name={name} />
          </li>
        );
      })}
    </StyledLights>
  );
}
