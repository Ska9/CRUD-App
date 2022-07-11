import React, { Component } from 'react'

 class AddCourse extends Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.addCourse}>
                    <input type="text" placeholder="Enter course..." value={this.props.current} onChange={this.props.handleChange}/>
                    <button>Add Course</button>
                </form>
            </div>
        )
    }
}

export default AddCourse;
