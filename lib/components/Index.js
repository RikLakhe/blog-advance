import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 44
    };
    asyncFunction = () =>{
        return Promise.resolve(123);
    };
    async componentDidMount(){
        this.setState({
            answer: await this.asyncFunction()
        });
    }
    render(){
        return(
            <h2>Hello Class Components ==== {this.state.answer} 222</h2>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));