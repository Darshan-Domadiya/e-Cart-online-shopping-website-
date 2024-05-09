import React from "react";
import "./breadcrumb.scss";
import { Breadcrumb, Container, Navbar, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathNames = pathname.split("/").filter((eachPathname) => eachPathname);
  const { sub_order_number, order_number } = useParams();

  return (
    <>
      <Container className="mt-4">
        <Row>
          {pathNames.length > 0 && (
            <Navbar>
              <ul className="d-flex gap-2 breadCrumbList text-muted">
                <li className="list-unstyled">
                  <Link to="/">Home</Link>
                </li>
                {">"}
                {pathNames.map((name, index) => {
                  const isLastItem = index === pathNames.length - 1;
                  let routeTo = "";
                  const separator = isLastItem ? null : <span> {">"} </span>;

                  if (name === "orders/") {
                    // For "Orders" page, construct breadcrumb with order and sub-order numbers

                    routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    return (
                      <li key={routeTo} className="list-unstyled">
                        {isLastItem ? (
                          <span>
                            OrderId#{sub_order_number}/{order_number}
                          </span>
                        ) : (
                          <Link to={routeTo}>Orders {">"}</Link>
                        )}
                      </li>
                    );
                  } else if (name === "productdetails") {
                    routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                  }

                  if (name === "orders/" && !isLastItem) {
                    // For "Orders" page, construct breadcrumb with order and sub-order numbers
                    // routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                    return (
                      <li key={routeTo} className="list-unstyled">
                        <Link to={routeTo}>Orders {">"}</Link>
                        {separator}
                      </li>
                    );
                  }
                })}
              </ul>
            </Navbar>
          )}
        </Row>
      </Container>
    </>
  );
};

export default BreadCrumbs;
