import React from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';

const ProjectCard = ({title, description, value, image, created_at, user}) => {
  return (
    <Card fluid>
     <Image alt='image' src={image ? image : 'http://via.placeholder.com/100x300'} />
     <Card.Content>
       <Card.Header>{title}</Card.Header>
       <Card.Meta>{moment(created_at).fromNow()} by {user.username}</Card.Meta>
       <Card.Description>{description}</Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a><Icon name='dollar' />{value}</a>
     </Card.Content>
   </Card>
  )
}

export default ProjectCard;
