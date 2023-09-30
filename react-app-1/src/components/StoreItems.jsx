import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";

export function Storeitem() {
    const quantity = 0;
    return (
    <Card className="h-100">
        <Card.Img variant="top" src={imageUrl} height="200px" style={{ objectFit: "cover"}}></Card.Img>


      <Card.Body className="d-flex flex-column ">
          <Card.Title className="d-flex align-items-baseline mb-4">
              <span className="f2-2">{title}</span>
              <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
              {quantity === 0 ? (
                  <Button className="w-100">+ Add to cart</Button>
                   ): <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem;"}}>   
                       <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem;"}}>
                           <Button>+</Button>
                           <div>
                               <span className="fs-3">{quantity}</span>In cart:
                           </div>
                           <Button>-</Button>
                           <Button variant="danger" size="sm">Remove</Button>
                       </div>
                           </div>}
                       </div>
            
        </Card.Body>
    </Card>
    
    )
  
}