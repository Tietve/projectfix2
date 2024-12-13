import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchProducts } from './MockApi';

const ProductHome = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadProducts(1, 6); // Lần đầu load 6 sản phẩm
    }, []);

    const loadProducts = async (currentPage, limit = 5) => { // Mỗi lần Load More lấy 5 sản phẩm
        if (isLoading) return; // Tránh gọi nhiều lần khi đang tải

        setIsLoading(true);
        const result = await fetchProducts(currentPage, limit);

        // Thêm sản phẩm mới vào danh sách hiện tại, không trùng lặp
        setProducts(prevProducts => {
            const existingIds = new Set(prevProducts.map(p => p.id));
            const newProducts = result.products.filter(p => !existingIds.has(p.id));
            return [...prevProducts, ...newProducts];
        });

        setHasMore(result.hasMore);
        if (result.hasMore) {
            setPage(currentPage + 1);
        }
        setIsLoading(false);
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">Upcoming Events</h2>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <small className="text-muted">{product.date.month}</small>
                                        <h3>{product.date.day}</h3>
                                    </div>
                                    <Button variant="primary" href="#">View Details</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {hasMore && (
                <div className="text-center mt-4">
                    <Button
                        variant="outline-primary"
                        onClick={() => loadProducts(page)}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Load More"}
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default ProductHome;
