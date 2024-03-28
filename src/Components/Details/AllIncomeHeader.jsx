import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { RiShareLine } from 'react-icons/ri'
import { CgArrowLeft } from 'react-icons/cg'

const AllIncomeHeader = ({title}) => {
  return (
    <header className='details__header'>
        <Link to={"/all-income"}><CgArrowLeft className='icon'/></Link>
        <h2 className="title">{title}</h2>
        <div className="icon__btn">
        <MdOutlineDeleteOutline className='icon'/>
        <RiShareLine className='icon'/>
        </div>
    </header>
  )
}

export default AllIncomeHeader
