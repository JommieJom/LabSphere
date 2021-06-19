import React from 'react';
import './MarkdownEditor.css';
import { Remarkable } from 'remarkable';

const markdown = `
## Lab2: Above Average
Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers.
***
### Test Data:
Input first number: 125
Input second number: 24
### Expected Output :
125 + 24 = 149
125 - 24 = 101
125 x 24 = 3000
125 / 24 = 5
125 mod 24 = 5
`;

const MARKDOWN_KEY = 'mdVal2'

class MarkdownEditor2 extends React.Component {
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

export default MarkdownEditor2;