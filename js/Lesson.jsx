import React from 'react';

class Lesson extends React.Component {

  render() {
      return <div className = "container">
                  <div className = "hanziStyle">  {this.props.theLesson.chinese } </div>
                  <div className = "translationContainer">
                      <h2 className = "pronunciationStyle"> { this.props.theLesson.pronunciation } </h2>
                      <p className = "translationStyle"> { this.props.theLesson.english } </p>
                  </div>
              </div>
      }
}

export default Lesson;
