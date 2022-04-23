import {Card,Button} from 'react-bootstrap';
import './User.css';



function User(props){

    const userData=props.userData;



    return <div className="user-div" >
        <Card>
  <Card.Img className="user-div-img"   variant="top" src={userData.picture} />
  <Card.Body>
    <Card.Title> {userData.firstName + " "+ userData.lastName} </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">See More Details </Button>
  </Card.Body>
</Card>
    </div>
}

export default User;