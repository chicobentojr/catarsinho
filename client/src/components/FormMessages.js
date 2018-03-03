import React from 'react';
import { Message } from 'semantic-ui-react';

const FormMessages = () => {
  return (
    <div>
      <Message error>
        <Message.Header>Algo ruim aconteceu :(</Message.Header>
        <p>Por favor, tente novamente.</p>
      </Message>
      <Message warning>
        <Message.Header>O formulário não está completo!</Message.Header>
        <p>Por favor, preencha corretamente o formulário.</p>
      </Message>
    </div>
  )
}

export default FormMessages;
