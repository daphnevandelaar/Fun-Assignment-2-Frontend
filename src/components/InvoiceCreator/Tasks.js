import React, { Component } from 'react'
import axios from 'axios';

class Tasks extends Component {

  handleClick(id, event){
    console.log(id);
  }
  state={
    tasks: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:9001/v1/tasks`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }

  render() {
    return (
      <div>
            <h2>Diensten</h2>
              <input type="text" placeholder="Diensten zoeken"></input>  <input type="submit" value="zoeken"></input>
              <ul className="list-group">
                  { this.state.tasks.map(task => 
                    <li key={task.id} className="list-group-item"> {task.description} {task.price} 
                      <div className= "right" value={task.id} id={task.id} onClick={(e) => this.handleClick(task.id ,e)}>
                        <i className="fas fa-plus clickable"/>
                      </div>
                    </li>
                  )}
                </ul>
      </div>
    )
  }
}
export default Tasks;