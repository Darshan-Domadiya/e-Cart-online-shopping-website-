import React from 'react'
import { Col } from 'react-bootstrap'

const CartProductCondition = () => {
  return (
    <>
        <Col className=" mt-2 mx-sm-0 mt-lg-2 col-12  col-sm-12 col-md-12 col-lg-4 col-xl-3 mt-lg-0 mt-xl-0 col-12 mt-md-3 mx-md-4 mx-lg-0 mx-xl-0 ">
          <p className="greyText fw-bold">
            Condition :<span className="fw-bold text-dark"> Brand new</span>
          </p>
          <p>
            374 sold, by <span className="fw-bold">Celby Store</span>,
            <span className="text-warning fw-bold"> 2 left </span>
          </p>
        </Col>
    </>
  )
}

export default CartProductCondition