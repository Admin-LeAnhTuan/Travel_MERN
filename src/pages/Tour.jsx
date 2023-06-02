import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import tourData from "../assets/data/tours";
import "../styles/tours.css";

import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";

const Tour = () => {
  const [pageCount, SetpageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    SetpageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title={"All Tour"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id} className="pt-5">
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Row>
          <Col lg="12">
            <Newsletter />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Tour;
