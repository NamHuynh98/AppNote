import React, { Component } from 'react'
import "./note_item.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import * as callAPI from "../../connectAPI/connectAPI";
library.add(faPencilAlt, faTimesCircle)
class NoteItem extends Component {
    getIdNoteItem = () => {
        callAPI.DELETE(this.props.note.id);
    }
    render() {
        return (
            
            <div className="note-item" >
                <div className="header-note">
                    <Link to="/"><div className="icon-close" onClick={this.getIdNoteItem}><FontAwesomeIcon icon="times-circle" /></div></Link>
                    <div className="text-title">{this.props.note.title}</div>
                </div>
                <div className="content-note">
                    <Link
                        to={{
                            pathname: "/edit",
                            state: { note: this.props.note }
                        }}
                        className="icon-edit"
                        onClick={this.getStatenoteItem}>
                        <FontAwesomeIcon icon="pencil-alt" /></Link>
                    <div className="text-note">{this.props.note.content}</div>
                </div>
            </div>
        )
    }
}
export default NoteItem;