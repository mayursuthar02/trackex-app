import Header from "./Header"
import AllIncomeHeader from "./AllIncomeHeader.jsx";
import { useParams } from "react-router-dom"

const Details = ({transactions, setTransactions}) => {

  const {id} = useParams();
  let transaction = transactions.find((item)=> item.id == id)


  return (
    <main className="main">
      <Header title={"Details"} id={id} setTransactions={setTransactions} transactions={transactions}/>

      <div className="details__container">

        <div className="details__page">

          <div className="detail">
            <h4 className="title">Title</h4>
            <p className="subtitle">{transaction.title}</p>
          </div>

          <div className="detail">
            <h4 className="title">Amount</h4>
            <p className="subtitle">${transaction.amount}</p>
          </div>

          <div className="detail">
            <h4 className="title">Transaction type</h4>
            <p className="subtitle">{transaction.selectedType}</p>
          </div>

          <div className="detail">
            <h4 className="title">Tag</h4>
            <p className="subtitle">{transaction.selectedTag}</p>
          </div>

          <div className="detail">
            <h4 className="title">When</h4>
            <p className="subtitle">{transaction.whenDateValue}</p>
          </div>

          <div className="detail">
            <h4 className="title">Note</h4>
            <p className="subtitle">{transaction.note}</p>
          </div>

          <div className="detail">
            <h4 className="title">Created At</h4>
            <p className="subtitle">{transaction.date}</p>
          </div>

        </div>

      </div>

    </main>
  )
}

export default Details
