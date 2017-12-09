
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ToDo extends Component {
  static propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

  static defaultProps = {
    isCompleted: false,
  }

  handleDelete = () => {
    this.props.deleteToDo(this.props.index)
  }

  render(){
    return(
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } onChange= {this.props.toggleComplete} />
       <span>{ this.props.description }</span>

       <button onClick = {this.handleDelete}>Trash</button>

      </li>
    );
  }
}

export default ToDo;
