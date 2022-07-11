import React, { Component, Fragment } from 'react'

 class Course extends Component {
    
    state = {
        isEdit: false
    }

    toggleState = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit: !isEdit
        })
    }

    updateCourseItem = (e) => {
        e.preventDefault()
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleState()
    }

    updateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v }} defaultValue={this.props.details.name}/>
                <button onClick={() => {this.props.editCourse(this.props.index)}}>Udpate</button>
            </form>
        )
    }

    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => {this.toggleState()}}>Edit</button>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete</button>
            </li>
        )
    }
    

    render() {
        let {isEdit} = this.state
        return (
            <Fragment>
                { isEdit ? this.updateForm() : this.renderCourse() }       
            </Fragment>
        )
    }
}

export default Course;