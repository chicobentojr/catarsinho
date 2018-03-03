import React, { Component } from 'react';
import {
  Form, Button, Dimmer, Image, TextArea,
  Input, Label
} from 'semantic-ui-react';
import FormMessages from '../components/FormMessages';
import App from './App';
import api from '../utils/api';

class CreateProjectPage extends Component {
  state = {
    title: '',
    description: '',
    value: '',
    image: '',
    dimmerActive: false,
    loading: false,
    error: false,
    warning: false
  }


  __handleSubmit = (e) => {
    if (!this.state.title || !this.state.description ||
        !this.state.value || !this.state.image ||
        (this.state.value < 1 || this.state.value > 500) ) {
      this.setState({warning: true});
      return;
    }
    this.setState({loading: true, error: false, warning: false });

    const project = {
      title: this.state.title,
      description: this.state.description,
      value: this.state.value,
      image: this.state.image
    }

    api.createProject(project).then((response => {
      this.setState({loading: false});
      this.props.history.push('/myprojects');
    })).catch((error) => {
      console.log(error);
      this.setState({loading: false, error: true});
    })
  }

  __onUpdateImage = () => {
    const file = this.fileUpload.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({image: reader.result});
    }
    reader.readAsDataURL(file);
  }

  __handleAddImage = () => {
    if (this.fileUpload) {
      this.fileUpload.click()
    }
  }

  render () {
    return (
      <App title='Criar Projeto' loading={this.state.loading}>
        <Form onSubmit={this.__handleSubmit} error={this.state.error} warning={this.state.warning}>
          <FormMessages />
          <Form.Field>
            <label>Imagem</label>
            <input hidden type='file' ref={(ref) => {this.fileUpload = ref}} onChange={this.__onUpdateImage} required />
            <Dimmer.Dimmable dimmed={this.state.dimmerActive}
              onMouseEnter={() => this.setState({dimmerActive: true})}
              onMouseLeave={() => this.setState({dimmerActive: false})} >
              <Dimmer active={this.state.dimmerActive}>
                <Button primary as='a' onClick={this.__handleAddImage}>Adicionar Imagem</Button>
              </Dimmer>
            <Image fluid src={this.state.image ? this.state.image : 'http://via.placeholder.com/700x300'} />
            </Dimmer.Dimmable>
          </Form.Field>
          <Form.Field>
            <label>Título</label>
            <input onChange={(e) => { this.setState({title: e.target.value })}} maxLength='100' placeholder='Título' required />
          </Form.Field>
          <Form.Field>
            <label>Descrição</label>
            <TextArea onChange={(e) => { this.setState({description: e.target.value })}} maxLength='300' placeholder='Descrição' required />
          </Form.Field>
          <Form.Field>
            <label>Valor</label>
              <Input onChange={(e) => { this.setState({value: e.target.value })}}
                labelPosition='right' type='number' max='500' placeholder='Valor' required>
                <Label basic>$</Label>
                <input />
                <Label>,00</Label>
              </Input>
          </Form.Field>
          <Button primary type='submit'>Criar</Button>
        </Form>
      </App>
    )
  }
}

export default CreateProjectPage;
