import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate'; 
import ProductCard from '../../components/product-card/ProductCard';
import data from '../../data/data.json';
import './products.scss';
import Spacer from '../../components/spacer/Spacer';

const Products = () => {
  const itemsPerPage = 8; 
  const pageCount = Math.ceil(data.products.length / itemsPerPage); 

  const [currentPage, setCurrentPage] = useState(0); 

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedProducts = data.products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Spacer />
      <Container className="products">
        <h1>ÜRÜNLERİMİZ</h1>
        <Row>
          {selectedProducts.map((item) => (
            <Col className="gy-5 text-decoration-none" md={4} lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
        <ReactPaginate className='pagination-bar'
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          disableNextClassName={currentPage === pageCount - 1 ? 'disabled' : ''}
          disablePrevClassName={currentPage === 0 ? 'disabled' : ''}
        />
      </Container>
    </>
  );
};

export default Products;
