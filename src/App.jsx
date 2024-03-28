import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard.jsx"
import CreateTransaction from "./Components/CreateTransaction/CreateTransaction.jsx"
import Details from "./Components/Details/Details.jsx"
import AllIncome from "./Components/AllIncome/AllIncome.jsx"
import AllExpense from "./Components/AllExpense/AllExpense.jsx"

// import dunnyTransaction from './transaction'
import { useEffect, useState } from "react"

const App = () => {
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('transactions')) || [])
  const [totalBalance, setTotalBalance] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  let total = 0;
  let income = 0;
  let expense = 0;

  useEffect(()=> {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  },[transactions])

  useEffect(()=> {
    total = 0
    income = 0
    expense = 0
    for (let i = 0; i < transactions.length; i++) {
      total = total + (transactions[i].Balance - transactions[i].Expense)       
      income = income + transactions[i].Income       
      expense = expense + transactions[i].Expense       
    }
    setTotalBalance(total)
    setTotalIncome(income)
    setTotalExpense(expense)
  },[transactions])
  

  return (
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions} totalBalance={totalBalance} totalIncome={totalIncome} totalExpense={totalExpense}/>}/>
        <Route path="/create-transaction" element={<CreateTransaction setTransactions={setTransactions} setTotalBalance={setTotalBalance} setTotalIncome={setTotalIncome} setTotalExpense={setTotalExpense}/>}/>
        <Route path="/details/:id" element={<Details transactions={transactions} setTransactions={setTransactions}/>}/>
        <Route path="/all-income" element={<AllIncome transactions={transactions} totalBalance={totalBalance}/>}/>
        <Route path="/all-expense" element={<AllExpense transactions={transactions} totalBalance={totalBalance}/>}/>
      </Routes>
    </BrowserRouter>
    </main>
  )
}

export default App