import React, { Component } from 'react';
import "./pagination.css";
import Pagination from "react-js-pagination";
class note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }
    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber });
        this.props.onChangepage(pageNumber);
    }
    render() {
        return (
            <div className="pagination-app">
                <Pagination
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={this.state.activePage}
                    itemsCountPerPage={8}
                    totalItemsCount={this.props.note.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    activeLinkClass="active"
                />

            </div>
        )
    }
}

export default note;