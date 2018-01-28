import React from 'react';
import ReactDOM from 'react-dom';
import Lesson from './Lesson.jsx';
import Top from './Top.jsx';
import styles from '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {

    class Template extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                lessons:[],
                number: null,
                theLesson:{},
            };
            this.getAnother=this.getAnother.bind(this);
            this.getLesson=this.getLesson.bind(this);
        };
        
        getLesson = () => {
            fetch("https://fortunecookieapi.herokuapp.com/v1/lessons/")
            .then(resp => { return resp.json(); })
            .then(data => {
                const lessonIndex = Math.floor(Math.random() * data.length);
                this.setState({
                    lessons: data,
                    number: lessonIndex,
                    theLesson: data[lessonIndex]
                });
            });
        };
        
        getAnother() {
            this.setState({
                number: Math.floor(Math.random() * this.state.lessons.length),
                theLesson: this.state.lessons[this.state.number]
            });
            console.log(this.state.number)
        };
        componentWillMount() {
            this.getLesson();
        };

        render(){
        return (
                <div className="container">
                    <Top getAnother={this.getAnother}/>
                    <Lesson theLesson={this.state.theLesson}/>
                </div>
                )
            }
    }

    ReactDOM.render(
        <Template />,
        document.getElementById('app')
    );
});