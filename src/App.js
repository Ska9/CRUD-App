import { Component } from 'react'

import AddCourse from './Components/AddCourse/AddCourse';
import Course from './Components/Course/Course';

class App extends Component {
  
  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'JavaScript'}
    ],

    current : ''

  }

  handleChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault()
    let current = this.state.current
    let courses = this.state.courses
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }

  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  editCourse = (index, value) => {
    let {courses} = this.state
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })  
  }

  render(){

    const {courses} = this.state
    const CourseList = courses.map((course,index) => {
      return (
        <Course details={course} key={index} index={index} editCourse={this.editCourse} deleteCourse={this.deleteCourse}/>
      )
    })

    return (
      <div className="App">
        <h1>Add Course</h1>
        <AddCourse current={this.state.current} handleChange={this.handleChange} addCourse={this.addCourse}/>
        <ul>{CourseList}</ul>
      </div>
    );
  }
  
}

export default App;
