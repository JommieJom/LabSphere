import React from 'react';
import './MarkdownEditor.css';
import { Remarkable } from 'remarkable';

const markdown = `
## Lab1: Above Average
It is said that 90% of frosh expect to be above average in their class. You are to provide a reality check.
***
## Input
The first line of standard input contains an integer 1≤𝐶≤50, the number of test cases. 
𝐶 data sets follow. Each data set begins with an integer, 𝑁, the number of people in the class (1≤𝑁≤1000). 
𝑁 integers follow, separated by spaces or newlines, each giving the final grade (an integer between 0 and 100) of a student in the class.
## Output
For each case you are to output a line giving the percentage of students whose grade is above average, rounded to exactly 3 decimal places.
### Sample Input 1
5\n
5 50 50 70 80 100\n
7 100 95 90 80 70 60 50\n
3 70 90 80\n
3 70 90 81\n
9 100 99 98 97 96 95 94 93 91\n
### Sample Output 1
40.000%\n
57.143%\n
33.333%\n
66.667%\n
55.556%\n
`;

const MARKDOWN_KEY = 'mdVal'

class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.md = new Remarkable();
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: localStorage.getItem(MARKDOWN_KEY) || markdown};
    }
  
    handleChange(e) {
      localStorage.setItem(MARKDOWN_KEY, e.target.value);
      this.setState({ value: localStorage.getItem(MARKDOWN_KEY) });
    }
  
    getRawMarkup() {
      return { __html: this.md.render(this.state.value) };
    }
    render() {
        return (
          <div className="MarkdownEditor">
            <h3>Insert lab question</h3>
            <label htmlFor="markdown-content">
            </label>
            <textarea
              id="markdown-content"
              onChange={this.handleChange}
              defaultValue={this.state.value}
              className = "MarkdownEditorText"
            />
            <h3>Lab question</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={this.getRawMarkup()}
            />
          </div>
        );
    }
}

export default MarkdownEditor;