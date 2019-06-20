import React, { Component } from 'react';
import AddNote from "../add/add_note";
import NoteItem from "../note_item/note_item";
import Pagination from "./pagination/pagination";
import "./note.css";
import * as callAPI from "../../connectAPI/connectAPI"
import { Redirect } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
library.add(faSignOutAlt, faUserAlt, faCog)
class note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      numPage: 1,
      subNote: [],
      itemsCountPerPage:8,
      open : false,
      click:false
    }

  }
  componentDidMount() {
    callAPI.GET().then(res => {
      this.setState({
        note: res
      })
    })
  }
  componentWillReceiveProps(){
    callAPI.GET().then(res => {
      this.setState({
        note: res
      })
    })
  }

  onChangepage = (numPage) => {
    let {itemsCountPerPage} = this.state;
    let pageStart=(numPage-1)*itemsCountPerPage;
    let subNote=[];
    let pageEnd=(numPage*itemsCountPerPage);
    if(this.state.note.length-pageStart<itemsCountPerPage)
    pageEnd=this.state.note.length;
    for(let i=pageStart;i<pageEnd;i++){
      subNote[i]=this.state.note[i];
    }
    this.setState({
      numPage: numPage,
      subNote: subNote
    })

  }
  handleClick=()=>{
    this.setState({
      open:!this.state.open,
      click:true
    })
  }
  loout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  render() {
    let subNote =[];
    var elmNote;
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/login" />
    }
    
    subNote=this.state.note.slice(0,this.state.itemsCountPerPage);
    if(this.state.subNote.length===0){
      elmNote = subNote.map((note, index) => {
        return <NoteItem key={index} note={note} />
      });
    }
    else{
      elmNote= this.state.subNote.map((note, index) => {
        return <NoteItem key={index} note={note} />
      });
    }
    return (
      <div className="notes" id="style-1">
        <div className="elm-note">
          {elmNote}
          <AddNote />
        </div>

        <div className={this.state.click ? this.state.open ? "setting open" : "setting closess" : "setting"}>
        <div className="setting-account" title="setting"><FontAwesomeIcon icon="cog" onClick={this.handleClick}/></div>
          <div className="account" title="chưa set nhé"><FontAwesomeIcon icon="user-alt" /></div>
          <div className="logout" title="logout" onClick={this.loout}><FontAwesomeIcon icon="sign-out-alt" /></div>
          
        </div>
        <footer><Pagination note={this.state.note} onChangepage={this.onChangepage} /></footer>
      </div>
    )
  }
}

export default note;