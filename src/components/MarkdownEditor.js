import React from 'react';
import './MarkdownEditor.css';
import { Remarkable } from 'remarkable';

class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.md = new Remarkable();
      this.handleChange = this.handleChange.bind(this);
      this.state = { value: 'Hello, **world**!' };
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    getRawMarkup() {
      return { __html: this.md.render(this.state.value) };
    }
    render() {
        return (
          <div className="MarkdownEditor">
            <h3>Insert Markdown</h3>
            <label htmlFor="markdown-content">
            </label>
            <textarea
              id="markdown-content"
              onChange={this.handleChange}
              defaultValue={this.state.value}
              className = "MarkdownEditorText"
            />
            <h3>Example</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={this.getRawMarkup()}
            />
          </div>
        );
    }
}

export default MarkdownEditor;