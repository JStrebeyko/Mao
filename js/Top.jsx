import React from 'react';


class Top extends React.Component {
  constructor(props){
    super(props);
  }

  handleMaoClick = () => {
    this.props.getAnother();
  }

  render(){
    return (<div className = "navbar">
            <div className = "face mao" onClick={this.handleMaoClick}/>
          </div>)
  }
}


export default Top;