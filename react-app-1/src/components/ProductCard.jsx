import { Card } from "react-bootstrap";

export const ProductCard = () => {
  return (
    <>
      <Card>
        <Card.Img />
        <Card.Content>
          <Card.Header>Product</Card.Header>
          <Card.Description></Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default ProductCard;