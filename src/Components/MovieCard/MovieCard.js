import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  
  const firstExample = {
    size: 30,
    value:movie.rate,
    edit: false
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
         
          <Card.Text>
            {movie.title}
          </Card.Text>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Card.Text>
            {movie.Type}
          </Card.Text>
<a href={movie.trailer} target='blank'><Button varient='primery' >Trailer  </Button></a>
<Link to={`/description/${movie.id}`} ><Button varient='primery'  >description  </Button></Link>
          <ReactStars {...firstExample} />
        </Card.Body>
      </Card>



    </div>
  )
}

export default MovieCard