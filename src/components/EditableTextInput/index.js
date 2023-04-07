import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {isSave: false, text: ''}

  getText = event => {
    this.setState({text: event.target.value})
  }

  onClickSave = () => {
    this.setState({isSave: true})
  }

  onClickEdit = () => {
    this.setState({isSave: false})
  }

  render() {
    const {isSave, text} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="h1">Editable Text Input</h1>
          {isSave ? (
            <div className="c1">
              <p className="p1">{text}</p>
              <button type="button" className="btn" onClick={this.onClickEdit}>
                Edit
              </button>
            </div>
          ) : (
            <div className="c1">
              <input
                type="text"
                value={text}
                className="input"
                onChange={this.getText}
              />
              <button type="button" className="btn" onClick={this.onClickSave}>
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EditableTextInput
