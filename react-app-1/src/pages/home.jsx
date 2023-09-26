import { Row, Col } from "react-bootstrap";

export function Home() {
    return (
        <Row {md=4}>
           {products.map(product => (
                <Col></Col>
            ))}
        </Row>
    )
}