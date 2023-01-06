import "../styles/cards.css";
import { data } from "../util/Data";
import SingleCard from "./singleCard";

export default function Cards(props) {
  return (
    <div className="container">
      <SingleCard data={data[0]} />
      <SingleCard data={data[1]} />
      <SingleCard data={data[2]} />
      <SingleCard data={data[3]} />
      <SingleCard data={data[4]} />
      <SingleCard data={data[5]} />
    </div>
  );
}

// export default function Cards(prop) {
//   return (
//     <div>
//       {prop.cards.map((card, i) => {
//         console.log(i);
//         return <SingleCard data={card} key={i} name="card" />
//       })}
//     </div>
//   );
// }