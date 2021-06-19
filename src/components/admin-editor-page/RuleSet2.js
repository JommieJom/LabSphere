import React from 'react'

const IN_KEY = 'rule_set_in_2'
const OUT_KEY = 'rule_set_out_2'

let defaultInput = `125
24
`

let defaultOutput = `125 + 24 = 149
125 - 24 = 101
125 x 24 = 3000
125 / 24 = 5
125 mod 24 = 5
`

class RuleSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: localStorage.getItem(IN_KEY) || defaultInput,
          output: localStorage.getItem(OUT_KEY) ||defaultOutput
        }
    };

    mySubmitHandler = (event) => {

    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if(nam == "input"){
            localStorage.setItem(IN_KEY, val);
        } else if(nam == "output"){
            localStorage.setItem(OUT_KEY, val);
        }
        this.setState({[nam]: val});
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler} className="RuleForm">
                <div className="RuleDiv">
                    <h3>Desired inputs:</h3>
                    <textarea
                        name="input"
                        value={this.state.input}
                        onChange={this.myChangeHandler}
                        className="RuleInput"
                    />
                </div>
                <input
                    type='submit'
                    className="RuleSubmit"
                />
                <div className="RuleDiv">
                    <h3>Expected Outputs:</h3>
                    <textarea
                        name="output"
                        value={this.state.output}
                        onChange={this.myChangeHandler}
                        className="RuleInput"
                    />
                </div>
            </form>
        ) 
    }
}

export default RuleSet;