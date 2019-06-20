import React, { Component } from 'react';
import "./edit.css";
import * as callAPI from "../../connectAPI/connectAPI";
import { Redirect } from "react-router-dom";
class edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      redirect: false
    }
  }
  componentWillMount() {
    if (this.props.location.pathname === "/edit") {
      this.setState({
        id: this.props.location.state.note.id,
        title: this.props.location.state.note.title,
        content: this.props.location.state.note.content
      })
    }
  }
  handleEnter = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      let data = {
        title: this.state.title,
        content: this.state.content
      }
      this.setState({
        redirect: true
      });
      if (this.props.location.pathname === "/add") {
        callAPI.POST(data);
      }

      if (this.props.location.pathname === "/edit") {
        callAPI.PUT(this.props.location.state.note.id, data);
      }
      return false;
    }
  }

  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="edit-form"  >
        <form onKeyPress={this.handleEnter} >
          <div><h2>{this.props.location.pathname === "/add" ? 'ADD NOTE' : "EDIT NOTE"} </h2></div>
          <label >Title Note</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your title....."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label >Note</label>
          <textarea
            name="content"
            cols="30"
            rows="10"
            placeholder="Enter your notes....."
            value={this.state.content}
            onChange={this.handleChange}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default edit;