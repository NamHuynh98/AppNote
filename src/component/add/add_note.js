import React, { Component } from 'react'
import "./add.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
library.add(faPlusCircle)
export default class AddNote extends Component {
  render() {
    return (
        <div className="note-item item-add note-item ">
          <Link to="/add" className="icon-add" title="Add Note"><FontAwesomeIcon icon="plus-circle" /></Link>
        </div>
    )
  }
}
