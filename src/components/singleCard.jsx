import "../styles/cards.css";

export default function SingleCard (props) {
    return(
        <div id="singleCard">
                <img src={props.data.image}/>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
                <a href="#">read more</a>
        </div>
    );
}