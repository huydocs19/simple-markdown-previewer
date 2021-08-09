import React, { Component } from 'react'

export default class Editor extends Component {
    constructor(props) {
        super(props); 
        this.handleChange = this.handleChange.bind(this);
        this.fullscreen = this.fullscreen.bind(this);
    }
    
    fullscreen() {         
        this.props.makeFullscreen("Editor");  
    }
    handleChange(event) {         
        this.props.addText(event.target.value);
    }
    render() { 
        if (this.props.previewFullscreen) {
            return (<div></div>);
          }
        if (this.props.editorFullscreen) {
        return (
            <div id="editorContainer" className="container center" >
                <h4><i className="fab fa-free-code-camp"></i><span>Editor</span> <i className="fas fa-expand-arrows-alt" onClick={this.fullscreen}></i></h4>
                <textarea id="editor" className="form-control" style={{height: "100vh"}} value={this.props.text} onChange={this.handleChange}>
                
                </textarea>
            </div>
            ); 
        }
        return (
            <div id="editorContainer" className="container center">
                <h4><i className="fab fa-free-code-camp"></i><span>Editor</span> <i className="fas fa-expand-arrows-alt" onClick={this.fullscreen}></i></h4>
                <textarea id="editor" className="form-control" style={{height: 200}} value={this.props.text} onChange={this.handleChange}>
                
                </textarea>
            </div>
            
            );
    }
}
