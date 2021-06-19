import React from 'react'

const IN_KEY = 'rule_set_in_1'
const OUT_KEY = 'rule_set_out_1'

let defaultInput = `5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`

let defaultOutput = `40.000%
57.143%
33.333%
66.667%
55.556%
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