import Card from "../card/CardComponend";
import "../cardList/CardListStyle.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
);
export default CardList;
