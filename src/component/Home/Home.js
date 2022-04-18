// import React from 'react';
// import './Home.css'

// import Services from '../Services/Services';
// import Footer from '../Footer/Footer';
// const Home = () => {
//     return ( 
        // <section>
        //      <div className="container d-flex justify-content-between">
        //         <div className="row">
        //             <div className="header-title col-sm-12 col-md-6 col-lg-4 w-50 text-start fw-bold ">
        //                 <span className="text-danger mb-3">Wellcome to Treina</span>
        //                 <h1 className="text-danger">Become More Healthy and Stay Sporty</h1>
        //                 <button className="btn btn-primary mt-3">Get Started</button>
        //                 </div>
        //                 <div className=" col-6 w-50">
        //                 <img style={{width: '300px'}} src={img1} alt="" />
        //             </div> 
        //         </div>
        //     </div>

            
        //     <div className="">
        //         <Services/>
        //     </div>

        //     <div>
        //         <Footer/>
        //     </div>
        // </section>
     
        
//     );
// };

// export default Home;

import img1 from'../images/silhouette-2860007 (1).png'
import React from 'react';

const Home = () => {
    return (
                <section>
             <div className="container d-flex justify-content-between">
                <div className="row">
                    <div className="header-title col-sm-12 col-md-6 col-lg-4 w-50 text-start fw-bold ">
                        <span className="text-danger mb-3">Wellcome to Treina</span>
                        <h1 className="text-danger">Become More Healthy and Stay Sporty</h1>
                        <button className="btn btn-primary mt-3">Get Started</button>
                        </div>
                        <div className=" col-6 w-50">
                        <img style={{width: '300px'}} src={img1} alt="" />
                    </div> 
                </div>
            </div>

            
            {/* <div className="">
                <Services/>
            </div>

            <div>
                <Footer/>
            </div> */}
        </section>
    );
};

export default Home;



