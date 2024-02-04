import "./App.css";
import Item from "./External/Func.js";
import Form from "./External/Form.js";
import { useEffect, useState } from "react";
import { element } from "prop-types";
import DataContext from "./External/DataContext.js";
import { useContext } from "react";

const design1 = { color: "red", textAlign: "center" };
const Title = () => <h1 style={design1}>บัญชีรายรับรายจ่าย</h1>;
const design2 = { color: "blue" };
const Description = () => <h2 style={design2}>บันทึกข้อมูลในแต่ละวัน</h2>;
const Transaction = (props) => {
  const { items } = props;
  const { income, expense } = useContext(DataContext);

  return (
    <div>
      <div style={{ fontSize: "20px" }}>
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </div>
      <div>
        <p>รายรับ : {income} บาท</p>
        <p>รายจ่าย : {expense} บาท</p>
        <p>คงเหลือ : {income - expense} บาท</p>
      </div>
    </div>
  );
};
function App() {
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="font" style={{ padding: "30px" }}>
        <Title />
        <Form onAddItem={onAddNewItem} />
        <Description />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
