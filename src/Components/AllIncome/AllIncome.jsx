import { useState } from "react";
import Header from "../Dashboard/Header.jsx";
import NavMenu from "../Dashboard/NavMenu.jsx";
import TransactionItem from "./TransactionItem.jsx";

const AllIncome = ({ transactions,totalBalance }) => {
  const [toggleMenu, setToggleMenu] = useState("");
  const transaction = transactions.filter(item => item.selectedType != 'Expense')
  return (
    <main className="main all-income">
      <Header
        title={"All Income"}
        setToggleMenu={setToggleMenu}
        toggleMenu={toggleMenu}
      />

      <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <div className="totalbox__container">
        <div className="total__balance totalbox">
          <div className="text">
            <p className="total">TOTAL BALANCE</p>
            <p className="money">₹{totalBalance}</p>
          </div>
        </div>
      </div>

      <h3 className="transaction__title">All Income</h3>

      <ul className="allIncome__list">
      { transaction.length == 0 && <p className="notfound__text">Transactions Not Found</p> }
        {transactions.map((item, index) => {
          if (item.selectedType == "Income") {
            return <TransactionItem key={index} item={item} />;
          }
        })}
      </ul>
    </main>
  );
};

export default AllIncome;
