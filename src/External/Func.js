import PropTypes, { symbol } from "prop-types";
import "./Func.css";
import DataContext from "./DataContext.js";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  return (
    <div className="font" style={{ paddingLeft: 40 }}>
      <li>
        {JSON.stringify(title)}
        <span className={status}> {amount}</span>
      </li>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
