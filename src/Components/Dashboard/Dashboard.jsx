import { useState } from "react"
import Header from "./Header.jsx"
import NavMenu from "./NavMenu.jsx"
import TransactionItem from "./TransactionItem.jsx"
import { BsArrowDownShort } from 'react-icons/bs'
import { BsArrowUpShort } from 'react-icons/bs'
import { BsPlusLg } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Dashboard = ({transactions, totalBalance, totalIncome, totalExpense}) => {
const [toggleMenu, setToggleMenu] = useState("")

  return (
    <main className="main">
        <Header title={"Dashboard"} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu}/>

        <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            
        <div className="totalbox__container">

            <div className="total__balance totalbox">
                <div className="text">
                    <p className="total">TOTAL BALANCE</p>
                    <p className="money">₹{totalBalance}</p>
                </div>
            </div>

            <div className="total__incom-expense">

                <div className="total__income totalbox">
                    <div className="icon">
                        <BsArrowUpShort/>
                    </div>
                    <p className="total">TOTAL INCOME</p>
                    <p className="money">+₹{totalIncome}</p>
                </div>

                <div className="total__expense totalbox">
                    <div className="icon">
                        <BsArrowDownShort/>
                    </div>
                    <p className="total">TOTAL EXPENSE</p>
                    <p className="money">-₹{totalExpense}</p>
                </div>
                
            </div>

        </div>

        <h3 className="transaction__title">Recent Transaction</h3>
        
        <ul className="transaction__list">
        {transactions.length == 0 && <p className="notefound">Transactions Not Found</p>}
        {
            transactions.map((item,index) => (
                <TransactionItem key={index} item={item}/>
            ))
        }    
        </ul>

        <Link to={'/create-transaction'} className="btn__create-transaction">
            <BsPlusLg/>
        </Link>
        
    </main>
  )
}

export default Dashboard
