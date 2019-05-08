import React, {Component} from 'react';

class Loading extends Component {
  state = {
    text: 'Loading',
  }

  componentDidMount(){
    this.interval = window.setInterval(() => {
      const { text } = this.state;
      const stopper = 'Loading...';
      
      (text === stopper)
        ? this.setState({ text: 'Loading' })
        : this.setState((prevState) => ({ text: prevState.text + '.' }));
    }, 500);
  };

  componentWillUnmount(){
    window.clearInterval(this.interval);
  };

  render() {
    const { text } = this.state;
    return (
      <p data-test='loading' className='loading'>{text}</p>
    );
  };
};

export default Loading;
