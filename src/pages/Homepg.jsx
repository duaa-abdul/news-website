import React from 'react';
import { Link} from 'react-router-dom'

const Homepg = () => {
    return (
        <>
             <div>
                {/* Hero Section */}
                <div className="bg-dark text-white py-5 text-center">
                    <h1 className="display-4">Welcome to  News Hub 📰</h1>
                    <p className="lead">Stay informed with the latest headlines, business updates, and political stories from around the world.</p>
                    <Link to="/business" className="btn btn-outline-light mt-3">Explore Now</Link>
                </div>

                 {/* Breaking News... */}
                <div className="bg-danger text-white py-2 px-3 d-flex justify-content-between align-items-center">
                    <strong>Breaking:</strong>
                    <marquee behavior="scroll" direction="left">
                        New policies announced by the government | Stock market hits record high | AI taking over more jobs this year | Tech companies release new gadgets...
                    </marquee>
                </div>

                {/* Categories Section */}
                <div className="container my-5">
                    <h2 className="text-center mb-4">Top Categories</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Business</h5>
                                    <p className="card-text">Latest trends and financial news from the business world.</p>
                                    <Link to="/business" className="btn btn-primary">Read Business</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Politics</h5>
                                    <p className="card-text">Get updates on political movements and government affairs.</p>
                                    <Link to="/politics" className="btn btn-primary">Read Politics</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Technology</h5>
                                    <p className="card-text">Catch the latest in tech innovations and startup news.</p>
                                    <Link to="/tech" className="btn btn-primary">Read Tech</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{/* editor.. */}
               
<div className="container my-5">
  <h2>Editors Picks</h2>

  <div className="card mb-4" style={{ maxWidth: '800px' }}>
    <div className="row g-0">
      <div className="col-md-5">
        <img
          src="https://www.themes247.net/html5/goodnews/images/thumbs/3.jpg"
          className="img-fluid rounded-start"
          alt="..."
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h3 className="card-title">If you wanted to get rich, how would you do it?</h3>
          <p className="card-text">
            Economically, you can think of a startup as a way to compress your whole working life into a few years.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="card mb-4" style={{ maxWidth: '800px' }}>
    <div className="row g-0">
      <div className="col-md-5">
        <img
          src="https://www.themes247.net/html5/goodnews/images/thumbs/3.jpg"
          className="img-fluid rounded-start"
          alt="..."
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h3 className="card-title">If you wanted to get rich, how would you do it?</h3>
          <p className="card-text">
            Economically, you can think of a startup as a way to compress your whole working life into a few years.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div className="card mb-4" style={{ maxWidth: '800px' }}>
    <div className="row g-0">
      <div className="col-md-5">
        <img
          src="https://www.themes247.net/html5/goodnews/images/thumbs/5-3.jpg"
          className="img-fluid rounded-start"
          alt="..."
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <h3 className="card-title">Lots of people get rich knowing nothing more than that?</h3>
          <p className="card-text">
            Economically, you can think of a startup as a way to compress your whole working life into a few years.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


                {/* Newsletter... */}
                <div className="bg-light py-5">
                    <div className="container text-center">
                        <h4>Subscribe to our Newsletter</h4>
                        <p>Get daily updates delivered straight to your inbox.</p>
                        <form className="d-flex justify-content-center">
                            <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Homepg
