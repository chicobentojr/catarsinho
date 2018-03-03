import React from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({id, title, description, value, image, created_at, user, showEditButton}) => {
  return (
    <Card fluid>
     <Image
       src={image ? image : 'http://via.placeholder.com/100x300'}
       label={{ as: 'a', color: 'green', content: `R$ ${value}`, ribbon: true }} />
     <Card.Content>
       <Card.Header as='a'>{title}</Card.Header>
       <Card.Meta>
         {moment(created_at).fromNow()}
       </Card.Meta>
       <Card.Description>{description}</Card.Description>
     </Card.Content>
     <Card.Content extra>
       <div>
         <a><Icon name='user'/>{user.username}</a>
         { showEditButton &&
           <Link className='right floated' to={`/myprojects/${id}/edit`}><Icon name='edit' />Edit </Link>
         }
        </div>
     </Card.Content>
   </Card>
  )
}

export default ProjectCard;
