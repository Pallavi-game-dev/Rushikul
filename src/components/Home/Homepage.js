import React from 'react';
import './Homepage.css'
function Homepage() {
  const carouselItems = [
    {
      imageUrl: require('../../assets/term-deposit.jpg'),
      title: 'Term Deposit',
      description: ''
    },
    {
      imageUrl: require('../../assets/personal-loan.jpg'),
      title: 'Personal Loan',
      description: ''
    },
    {
      imageUrl: require('../../assets/saving.jpg'),
      title: 'Saving',
      description: ''
    },
    {
      imageUrl: require('../../assets/elocaker.jpg'),
      title: 'E Locker',
      description: ''
    },

    // Add more objects for additional cards
  ];
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
  const groupedItems = chunkArray(carouselItems, 4);

  return (
    <>
    <section>
    <h4 class="text-center heading fontWeight700">Our Services</h4>
      <div id="carouselExampleControls" className="carousel slide mt-4" data-ride="carousel">
        <div className="carousel-inner">
          {console.log(groupedItems)}
          {groupedItems.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="row">
                {group.map((item, idx) => (
                  <div key={idx} className="col-md-3 mb-3">
                    <div className="card card-design">
                      <img className="img-fluid" alt="100%x280" src={item.imageUrl} />
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
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
   
  </>
    
  )
  
}
export default Homepage