import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

// {volumes.map((volume) => {
//   return (
//     <li key={volume.title}>
//       <Link href={`/volumes/${volume.slug}`}>{volume.title} </Link>
//     </li>
//   );
// })}

export default function Lights({ rooms, handleToggle }) {
  return (
    <StyledLights rooms={rooms}>
      {rooms.map((room) => {
        return (
          <li key={room.id}>
            <Light
              name={room.name}
              isOn={room.isOn}
              handleToggle={() => handleToggle(room.id)}
            />
          </li>
        );
      })}
    </StyledLights>
  );
}
