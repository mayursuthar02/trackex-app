import { useState } from "react";
import Header from "../Details/Header.jsx";
import { dates } from "./dateFunction.js";

import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdDateRange } from "react-icons/md";


const CreateTransaction = ({ setTransactions}) => {

  const navigate = useNavigate();

  const [selectTypeToggle, setSelectTypeToggle] = useState("");
  const [selectTagToggle, setSelectTagToggle] = useState("");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [whenDateValue, setWhenDateValue] = useState("");
  const [note, setNote] = useState("");
  const [transIcon, setTransIcon] = useState("")

  let Balance, Income, Expense;
  const date = dates();

  const selectTypeToggleFun = () => {
    if (selectTypeToggle == "") {
      setSelectTypeToggle("active");
    } else {
      setSelectTypeToggle("");
    }
  };
  const selectTagToggleFun = () => {
    if (selectTagToggle == "") {
      setSelectTagToggle("active");
    } else {
      setSelectTagToggle("");
    }
  };

  const createTransaction = (e) => {
    e.preventDefault();

    Balance = selectedType == "Income" ? Number(amount) : 0
    Income = selectedType == "Income" ? Number(amount) : 0
    Expense = selectedType == "Expense" ? Number(amount) : 0
    
    if (title && amount && selectedType && selectedTag && whenDateValue && note) {
      let transactionsObj = {id:uuid(), title, amount, selectedType, selectedTag, whenDateValue, note, date, Balance, Income, Expense, transIcon}
      console.log(transactionsObj)
      setTransactions((prev)=> [transactionsObj, ...prev])
      navigate('/');
      Balance = 0;
      Income = 0;
      Expense = 0;
    }
    
  };

  return (
    <section className="add__transa--section">
      <Header title={"Add Transaction"} />

      <div className="create__transaction__form">
        <form onSubmit={(e) => createTransaction(e)}>
          <input
            type="text"
            className="text__feild"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="text__feild"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="sectionOption">
            <div className="select">
              <textarea
                className={`select-btn ${selectTypeToggle}`}
                onClick={selectTypeToggleFun}
                value={selectedType}
                placeholder="Transaction type"
                readOnly
              ></textarea>
              <MdOutlineKeyboardArrowDown
                className="icon"
                onClick={selectTypeToggleFun}
              />
            </div>
            <div className={`select__content ${selectTypeToggle}`}>
              <span
                className="select__item"
                onClick={() => {
                  selectTypeToggleFun();
                  setSelectedType("Income");
                }}
              >
                Income
              </span>
              <span
                className="select__item"
                onClick={() => {
                  selectTypeToggleFun();
                  setSelectedType("Expense");
                }}
              >
                Expense
              </span>
            </div>
          </div>

          <div className="sectionOption">
            <div className="select">
              <textarea
                className={`select-btn ${selectTagToggle}`}
                onClick={selectTagToggleFun}
                value={selectedTag}
                placeholder="Tag"
                readOnly
              ></textarea>
              <MdOutlineKeyboardArrowDown
                className="icon"
                onClick={selectTagToggleFun}
              />
            </div>
            <div className={`select__content ${selectTagToggle}`}>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Entertainment");
                  setTransIcon("films");
                }}
              >
                <img src="/src/assets/Icon/films.png" alt="" className="icon"/>
                Entertainment
              </span>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Transportation");
                  setTransIcon("paper-plane");
                }}
              >
                <img src="/src/assets/Icon/paper-plane.png" alt="" className="icon"/>
                Transportation
              </span>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Side Project");
                  setTransIcon("file-invoice-dollar");
                }}
              >
                <img src="/src/assets/Icon/file-invoice-dollar.png" alt="" className="icon"/>
                Side Project
              </span>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Food");
                  setTransIcon("burger-glass");
                }}
              >
                <img src="/src/assets/Icon/burger-glass.png" alt="" className="icon"/>
                Food
              </span>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Personal Spendings");
                  setTransIcon("user");
                }}
              >
                <img src="/src/assets/Icon/user.png" alt="" className="icon"/>
                Personal Spendings
              </span>
              <span
                className="select__item"
                onClick={() => {
                  setSelectTagToggle();
                  setSelectedTag("Other");
                  setTransIcon("boxes");
                }}
              >
                <img src="/src/assets/Icon/boxes.png" alt="" className="icon"/>
                Other
              </span>
            </div>
          </div>

          <div className="select-date">
            <input
              type="date"
              name=""
              id=""
              className={
                whenDateValue == "" ? "text__feild date" : "text__feild date1"
              }
              placeholder="When"
              value={whenDateValue}
              onChange={(e) => setWhenDateValue(e.target.value)}
            />
            <MdDateRange className="icon" />
          </div>

          <input
            type="text"
            className="text__feild"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button
            type="submit"
            className="btn"
            onClick={(e) => createTransaction(e)}
          >
            ADD TRANSACTION
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateTransaction;
