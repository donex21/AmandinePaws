import React from 'react'

function Home() {
    return (
        <div>
             <header className="HeaderBG text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-white">Welcome to Amandine Paws</h1>
                    <h3 className="fw-light text-white">
                        Highest Quality Care For Pets You Will Love
                    </h3>
                </div>
            </header>
       
            <div className="container">
                <div className="row justify-content-md-center">
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <h2 className="card-title mb-0">Veterinarian</h2>
                                <div className="card-text text-black-70">
                                    Animal healthcare is made
                                    more convenient through online medication, 
                                    and online booking appointments to our veterinarian.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <h2 className="card-title mb-0">Pet Boarding</h2>
                                <div className="card-text text-black-70">
                                    Amandine Paws is a pet care
                                    service offering pet sitting,
                                    dog walking, boarding, 
                                    and other services offered by the Pet Boarding.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <h2 className="card-title mb-0">Pet Owner</h2>
                                <div className="card-text text-black-70">
                                    Be worry free and happy while we 
                                    keep your pets safe and healthy. 
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <h2 className="card-title mb-0">Pet Store</h2>
                                <div className="card-text text-black-50">
                                    Amandine Paws-Pet Store is an online
                                    shopping for a variety of pet supplies and accessories.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>           
        </div>
    )
}

export default Home
