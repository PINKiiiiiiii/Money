import "./Form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
    // console.log(itemData);
  };

  return (
    <div className="font">
      <from>
        <div>
          <label className="form-control">ชื่อรายการ</label>
          <input
            className="font"
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div>
          <label className="form-control">จำนวนเงิน</label>
          <input
            className="font"
            type="text"
            placeholder="ระบุจำนวนเงิน"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="btn" onClick={submit}>
            เพิ่มข้อมูล
          </button>
        </div>
      </from>
    </div>
  );
};

export default Form;
