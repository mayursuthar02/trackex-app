import { Link } from "react-router-dom"

const TransactionItem = ({item}) => {
  return (
    <Link to={`/details/${item.id}`} className="transaction__item" item={item}>
        <div className="icon">
          <img src={`/src/assets/Icon/${item.transIcon}.png`} alt="" className="icon__img"/>
        </div>
        <div className="text">
            <h5 className="title">{item.title}</h5>
            <p className="tag">{item.selectedTag}</p>
        </div>
        <div className="money-date">
            <p className={item.selectedType == 'Income' ? "money income" : "money expense"}>{item.selectedType == 'Income' ? '+₹'+item.amount : '-₹'+item.amount}</p>
            <p className="date">{item.whenDateValue}</p>
        </div>
    </Link>
  )
}



export default TransactionItem