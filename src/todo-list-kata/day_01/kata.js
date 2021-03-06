import React from 'react';

class TodoList extends React.Component {
  state = {};

  typeTaskName = (e) => {
    const val = e.target.value;
    this.setState(({ prev, props }) => ({ taskName: val }));
  }

  render() {
    const tasks = this.state.taskName ? [this.state.taskName] : [];
    return (
      <div id='todo-list'>
        <ul>
          {tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
        <input id="taskName" type="text" onChange={this.typeTaskName} />
        <button id="submitTask" />
      </div>
    )
  }
}

export default TodoList;
