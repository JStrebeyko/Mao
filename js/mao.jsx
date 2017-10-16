import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {

    class Lesson extends React.Component {

        render() {
            return <div>
                    <div className="hanziStyle">{this.props.lesson.chinese}</div>
                    <div className="box">
                        <h2 className="pronunciationStyle">{this.props.lesson.pronunciation}</h2>
                        <p className="translationStyle">{this.props.lesson.english}</p>
                    </div>
                    </div>
            }
        }

    class Top extends React.Component {

        render(){
            return <div className="top"><div className="face mao" onClick={this.getAnother}></div></div>
        }
    }

    class Template extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                lessons:[],
                number: 1,
                theLesson:""
            };
        };

        getLesson() {
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
                theLesson: lessons[lessonIndex]
            });
            console.log(this.state.number)
        };

        componentDidMount() {
            this.getLesson();
        };


        render() {
            return <div>
                <Top onClick={this.getAnother}/>
                <Lesson lesson={this.state.theLesson}></Lesson>
            </div>
        }

    }

    ReactDOM.render(
        <Template/>,
        document.getElementById('app')
    );

});
