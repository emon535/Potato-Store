import React, { Component } from 'react';
import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_light';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    if (this.editorRef.current) {
      this.editor = ace.edit(this.editorRef.current.id);
      this.editor.getSession().setMode('ace/mode/json');
      this.editor.setTheme('ace/theme/solarized_light');
      this.editor.setValue(this.props.value || "");
    }
  }

  componentDidUpdate(){
    this.editor.setValue(this.props.value);
  }

  render() {
    return (
      <div id="editor" ref={this.editorRef} className="flexChild" />
    )
  }
}
