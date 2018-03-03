import React, { Component } from 'react';
import { Container, Form, Button, Dimmer, Image, Segment, Header as SemanticHeader } from 'semantic-ui-react';
import Header from '../components/Header';
import api from '../utils/api';

class CreateProjectPage extends Component {
  state = {
    title: '',
    description: '',
    value: '',
    image: '',
    fileUpload: null,
    dimmerActive: false,
    loading: false
  }

  __handleSubmit = (e) => {
    if (!this.state.title || !this.state.description || !this.state.value || !this.state.image ) {
      return;
    }
    this.setState({loading: true});

    const project = {
      title: this.state.title,
      description: this.state.description,
      value: this.state.value,
      image: this.state.image
    }

    api.createProject(project).then((response => {
      console.log(response);
      this.setState({loading: false});
      this.props.history.push('/myprojects');
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false});
    })
  }

  __onUpdateImage = () => {
    const file = this.state.fileUpload.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({image: reader.result});
    }
    reader.readAsDataURL(file);
  }

  __handleAddImage = () => {
    if (this.state.fileUpload) {
      this.state.fileUpload.click()
    }
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <Segment>
          <Form onSubmit={this.__handleSubmit} loading={this.state.loading}>
            <Form.Field>
              <label>Image</label>
              <input hidden type='file' ref={(ref) => {this.setState({fileUpload: ref})}} onChange={this.__onUpdateImage} placeholder='Image' required />
              <Dimmer.Dimmable dimmed={this.state.dimmerActive}
                onMouseEnter={() => this.setState({dimmerActive: true})}
                onMouseLeave={() => this.setState({dimmerActive: false})} >
                <Dimmer active={this.state.dimmerActive}>
                  <SemanticHeader as='h2' inverted>
                    Add an image for you project
                  </SemanticHeader>
                  <Button primary as='a' onClick={this.__handleAddImage}>Add</Button>
                </Dimmer>
              <Image fluid src={this.state.image ? this.state.image : 'http://via.placeholder.com/700x300'} />
              </Dimmer.Dimmable>
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input onChange={(e) => { this.setState({title: e.target.value })}} placeholder='Title' required />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input onChange={(e) => { this.setState({description: e.target.value })}} placeholder='Description' required />
            </Form.Field>
            <Form.Field>
              <label>Value</label>
              <input onChange={(e) => { this.setState({value: e.target.value })}} type='number' max='500' placeholder='Value' required />
            </Form.Field>
            <Button type='submit'>Create</Button>
          </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default CreateProjectPage;
