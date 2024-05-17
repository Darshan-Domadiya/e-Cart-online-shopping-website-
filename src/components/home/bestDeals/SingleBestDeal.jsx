import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./singlebestdeal.scss";
import BestDealImage from "./BestDealImage";
import BestDealDescription from "./BestDealDescription";
import BestDealReview from "./BestDealReview";
import BestDealDiscount from "./BestDealDiscount";
import { useNavigate } from "react-router-dom";

const SingleBestDeal = ({ dataList }) => {
  // console.log(dataList);
  const navigate = useNavigate();

  const handleSingleBestdeal = () => {
    navigate(
      `/productDetails/${dataList.slug}/${dataList.unique_id}/${dataList.sku}`
    );
  };

  return (
    <>
      <Container className="border-danger mt-1 d-flex align-items-center justify-content-center">
        <Row>
          <Col onClick={handleSingleBestdeal}>
            <div className="dealCard-border">
              <div className="d-flex align-items-center justify-content-center">
                <BestDealImage dataList={dataList} />
              </div>

              <div className="p-3">
                <BestDealDescription dataList={dataList} />
                <div className="d-flex align-items-center gap-3 ">
                  <BestDealReview />
                </div>

                <div className="mt-2">
                  <BestDealDiscount dataList={dataList} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleBestDeal;
