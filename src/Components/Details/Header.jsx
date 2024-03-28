import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { RiShareLine } from 'react-icons/ri'
import { CgArrowLeft } from 'react-icons/cg'

const Header = ({title, id, setTransactions, transactions}) => {

  const navigate = useNavigate();


  const handleDelete = () => {
    const newTransactions = transactions.filter((item) => item.id != id)
    setTransactions(newTransactions)
    navigate('/');
  }
  
  
  return (
    <header className='details__header'>
        <Link to={"/"}><CgArrowLeft className='icon'/></Link>
        <h2 className="title">{title}</h2>
        <div className="icon__btn">
        <MdOutlineDeleteOutline className='icon' onClick={handleDelete}/>
        <RiShareLine className='icon'/>
        </div>
    </header>
  )
}

export default Header
