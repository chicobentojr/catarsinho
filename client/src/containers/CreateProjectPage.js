import React, { Component } from 'react';
import { Container, Form, Button, Segment } from 'semantic-ui-react';
import Header from '../components/Header';
import api from '../utils/api';

class CreateProjectPage extends Component {
  state = {
    title: '',
    description: '',
    value: '',
    image: '',
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

  render () {
    return (
      <div>
        <Header></Header>
        <Container text style={{ marginTop: '7em' }}>
          <Segment>
          <Form onSubmit={this.__handleSubmit} loading={this.state.loading}>
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
            <Form.Field>
              <label>Image</label>
              <input onChange={(e) => { this.setState({image: e.target.value })}} placeholder='Image' required />
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
