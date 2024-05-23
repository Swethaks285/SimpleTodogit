import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {userDetails: initialTodosList}

  deletepara = id => {
    const {userDetails} = this.state
    const deleteDetails = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: deleteDetails})
  }

  render() {
    const {userDetails} = this.state
    return (
      <div className="bg">
        <div className="bgg">
          <h1 className="h">Simple Todos</h1>
          <u1>
            {userDetails.map(each => (
              <TodoItem
                userDetails={each}
                key={each.id}
                deletepara={this.deletepara}
              />
            ))}
          </u1>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
