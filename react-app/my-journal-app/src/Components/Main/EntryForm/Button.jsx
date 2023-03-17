
export function EntryButton({ text, fontSize, backgroundColor, color, borderRadius }) {
  return (
    <>
    <div className="button__box">
    <button className="Button" style={{ fontSize, backgroundColor, color, borderRadius }}>
      {text}
    </button>
    </div>
  
    </>
  );
}
// function Counter() {
//   const [counter, setCounter] = useState([]);

//   function handleClick(){
//     setCounter([...counter,1]);
//   }
  
//   return (
//     <>
//     <div className="counters">
//       <p>All Entries {handleClick} </p>
//       <p>Favourites {handleClick}</p>
//       </div>
//     </>
//   );
// }
