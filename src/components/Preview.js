import React, { Component } from 'react';
const DOMPurify = require('dompurify')(window);


const hljs = require('highlight.js');
const marked = require('marked');
export default class Preview extends Component {
  constructor(props) {
    super(props);
    this.fullscreen = this.fullscreen.bind(this);
  }
  fullscreen() {
    this.props.makeFullscreen("Preview");   
  }
  render() { 
    let options = {breaks: true, highlight: function(code, lang) {          
    const language = hljs.getLanguage(lang) ? lang : 'javascript';
    return hljs.highlight(code, { language }).value;

    }};  
    if (this.props.editorFullscreen) {
      return (<div></div>);
    }
    if (this.props.previewFullscreen) {
      return (
        <div id="previewContainer" className="container" style={{minHeight: "100vh"}}>
          <h4><i className="fab fa-free-code-camp"></i><span>Previewer</span> <i className="fas fa-expand-arrows-alt" onClick={this.fullscreen}></i></h4> 
          
          <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(this.props.text, options))}}></div>
        </div>
        ); 
    }
    return (
          <div id="previewContainer" className="container" style={{minHeight: 200}}>
            <h4><i className="fab fa-free-code-camp"></i><span>Previewer</span> <i className="fas fa-expand-arrows-alt" onClick={this.fullscreen}></i></h4> 
            
            <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(this.props.text, options))}}></div>
          </div>
          );
  }
}
