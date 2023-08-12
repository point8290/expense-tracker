import './Expense.css'

const Expense = (props) => {

    return <div className='expense'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>

    </div>

}

export default Expense;