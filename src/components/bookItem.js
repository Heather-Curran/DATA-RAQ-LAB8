import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'; 

//Inherite from React.Component
export class BookItem extends React.Component{

    render(){
        return( 
            //Added card
            <div style={{ marginLeft:620}}>
                 <Card className="text-center" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.book.cover} />
                  <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>
                        <h4>{this.props.book.author}</h4>
                    </Card.Text>
                  </Card.Body>
                  <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link>
                 </Card>
                {/* <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"/>
                <h4>{this.props.book.authors[0]}</h4> */}
            </div>
        );
    }    
}