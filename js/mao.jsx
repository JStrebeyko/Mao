import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class Lesson extends React.Component {
        render() {
            return <div>
                    <div className="hanziStyle" onClick={this.props.getAnother}>{this.props.lesson.chinese}</div>
                    <div className="box">
                        <h2 className="pronunciationStyle">{this.props.lesson.pronunciation}</h2>
                        <p className="translationStyle">{this.props.lesson.english}</p>
                    </div>
                    </div>
            }
        }

    class Template extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                lessons:[],
                number: 1,
                theLesson:{},
            };

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

        getAnother = () => {
            this.setState({
                number: Math.floor(Math.random() * this.state.lessons.length),
                theLesson: this.state.lessons[this.state.number]
            });
            console.log(this.state.number);
        };

        componentWillMount() {
            this.getLesson();
        };


        render() {
            return <div>
                    <div className="face mao" onClick={this.getAnother} />
                    <Lesson lesson={this.state.theLesson} />
                </div>
        }

    }

    ReactDOM.render(
        <Template />,
        document.getElementById('app')
    );

});
