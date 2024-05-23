// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, deletepara} = props
  const {id, title} = userDetails

  const deleteic = () => {
    deletepara(id)
  }

  return (
    <li className="lis">
      <p className="p">{title}</p>
      <button className="btn" type="button" onClick={deleteic}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
