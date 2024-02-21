import React from 'react';
import Navbar from '../../Components/navbar/Navbar1';
import './SchemesPage.css'; 

function Schemes() {
  return (
    <>
      <Navbar />
      <br />
      <div className='scheme'>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="Schemes">
              <div className="schemes-content">
                <div className="h2">Government Schemes</div>
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h5>
                    <p className="card-text">Provides comprehensive insurance cover against failure of the crop thus helping in stabilising the income of the farmers.</p>
                    <a href="https://pmfby.gov.in/" className="btn btn-primary">Read More <i className="arrow right"></i><i className="arrow right"></i></a>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Prime Minister Jeevan Jyoti Bima Yojana</h5>
                    <p className="card-text">Life Insurance scheme with risk coverage of Rs. 2 Lakh in case of death of the insured, due to any reason.</p>
                    <a href="https://financialservices.gov.in/beta/en/pmjjby" className="btn btn-primary">Read More <i className="arrow right"></i><i className="arrow right"></i></a>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Pradhan Mantri Suraksha Bima Yojana</h5>
                    <p className="card-text">An accident Insurance scheme, PMSBY offers a one-year accidental death and disability cover, which can be renewed annually.</p>
                    <a href="https://www.financialservices.gov.in/beta/en/pmsby" className="btn btn-primary">Read More <i className="arrow right"></i><i className="arrow right"></i></a>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Livestock insurance Scheme</h5>
                    <p className="card-text">Provides protection mechanism to the farmers against any eventual loss of their animals due to death.</p>
                    <a href="https://dahd.nic.in/related-links/livestock-insurance" className="btn btn-primary">Read More <i className="arrow right"></i><i className="arrow right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schemes;
