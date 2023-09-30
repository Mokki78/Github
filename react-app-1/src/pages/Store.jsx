import { Col, Row } from "react-bootstrap";
import StoreItems from "../components/StoreItems"

export function Store() {
    return (
        <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={4} >
            {StoreItems.map(item => (
                <Col key={item.id}>StoreItem {...item}</Col>
            ))}
        </Row>
        </>
    )
}