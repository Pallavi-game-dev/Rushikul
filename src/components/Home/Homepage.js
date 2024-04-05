import React from "react";
import "./Homepage.css";
const goldLoanJson = require("../../Jsons/goldLoan.json");
const rushikul_services = require("../../Jsons/special_concepts.json");
function Homepage() {
 
  // Function to chunk array into groups of three
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, []);
  };

  // Group carousel items into sets of three
  const groupedItems = chunkArray(rushikul_services.en, 4);

  return (
    <>
      <section>
        <h4 className="text-center heading fontWeight700">Our Services</h4>
        <div
          id="carouselExampleControls"
          className="carousel slide mt-4"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {groupedItems.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {group.map((item, idx) => (
                    <div key={idx} className="col-md-3 mb-3">
                      <div className="card card-design">
                        <img
                          className="img-fluid imgHeight"
                          alt="100%x280"
                          src={require('../../assets/rushikul_special/'+item.imageUrl)}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section>
        <h4 className="text-center heading fontWeight700">Our Services</h4>
        <div
          id="carouselExampleControls"
          className="carousel slide mt-4"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {groupedItems.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {group.map((item, idx) => (
                    <div key={idx} className="col-md-3 mb-3">
                      <div className="card card-design">
                        <img
                          className="img-fluid imgHeight"
                          alt="100%x280"
                          src={require('../../assets/rushikul_special/'+item.imageUrl)}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className="bgLightGrey">
        <div className="containerFull">
          <div className="sectionHeader">
            <h4 className="heading fontWeight700 text-center">{goldLoanJson.en.Heading}</h4>
            <div className="text-center mt-2">
              <p>
              {goldLoanJson.subline}
              </p>
            </div>
          </div>
          <div className="row mt-lg-1 mt-3">
            {
              goldLoanJson.en.steps.map((ele)=>{
                let path = require('../../assets/GoldLoan/'+ ele.icon)
                return(
                  
                  <div className="col-lg-3 col-md-3 col-6">
                      <div className="loanItem">
                        <div className="iconLoan">
                          <img
                            src={path}
                            alt="documetation"
                          />
                        </div>
                        <h4 className="small_heading fontWeight600">
                          {ele.label}
                        </h4>
                      </div>
                    </div>
                )
              })
          }           
          </div>
        </div>
      </section>
     
      {/* <section>
			<div class="containerFull">
				<div class="row">
					<div class="col-lg-5 col-md-5 order-lg-1 order-2 order-md-1">
						<div class="leftAboutHome mt-5 mt-lg-0">
							<div class="innerLeftAbout">
								<img src="https://www.samatapat.com/admin/uploads/homepage/aboutimg6548b80ce9135.jpg" alt="officeImg"/>
							</div>
						</div>
					</div>
					<div class="col-lg-7 col-md-7 order-lg-2 order-1 order-md-2">
						<div class="rightAboutHome">
							<h4 class="heading fontWeight700 text-uppercase">ABOUT US</h4>
							<p class="mt-2 title text_secondary">All-round progress of Samata Civil Co-operative Credit Institutions:</p>
							<div class="mt-3"><p>With a view to meet the financial needs of the small traders in Kopargaon town, Samata was established on 11 May 1986 in a premises of 10 by 15 feet on Shivaji Road with a share capital of Rs 1 lakh, deposits of Rs 3 lakh and 700 members to bring equality among the small traders of the taluka Civic Cooperative Credit Institution was established. Since the inception of Samata, maintaining the principles of co-operation on the basis of co-operative principles, in the initial four years till 1991, the institution had attained the deposits of Rs.1 crore. After that, under the guidance of Chairman Omprakash Dadappaalias Kaka Koyate and Board of Directors of Samata Credit Union, Samata is taking the graph of financial progress higher without looking back. Today, Samata Credit Union has 21 extended gold loan counters with 13 branches and has a network of Samata Credit Union all over Maharashtra. Samata Patsanstha has 67,982 members through 16 branches and 23 gold loan extensions counter,extended cells as on 24 May 2022. While disbursing Rs. 665 crore 81 lakh deposits and disbursing loans of Rs 497 crore, it has crossed the milestone of Rs 1,200 crore combined business.</p></div>
							<a href="https://www.samatapat.com/about.php" class="linkBtn">Read More <i class="bi bi-arrow-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section> */}
    </>
  );
}
export default Homepage;
