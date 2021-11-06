import React from 'react'

function AdminInfo() {
    return (
        <div>
            
            <header className="bg-primary text-center py-5 mb-4">
                <div className="container">
                    <h1 className="fw-light text-white">Amandine Paws</h1>
                    <h4 className="fw-light text-white">
                        Android-based mobile application for pet owners 
                        to easily locate veterinary clinics, contact veterinarians
                        during emergency situations, 
                        find pet boarding to look after their pets, 
                        check any sociable events for their pets and is also helpful 
                        for those people who are interested in adopting pets 
                        from the comfort of their mobile phones.
                    </h4>
                    <h1 className="fw-light text-white">Meet the Team</h1>
                </div>
            </header>

            
            <div className="container">
                <div className="row justify-content-md-center">
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="Picture1"/>
                            <div className="card-body text-center">
                            <h5 className="card-title mb-0">Mogien Armian</h5>
                            <div className="card-text text-black-70">Developer</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="Picture2"/>
                            <div className="card-body text-center">
                            <h5 className="card-title mb-0">Sheila Uy</h5>
                            <div className="card-text text-black-70">Developer</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" className="card-img-top" alt="Picture3"/>
                            <div className="card-body text-center">
                            <h5 className="card-title mb-0">Maria Fe Bastida</h5>
                            <div className="card-text text-black-70">Developer</div>
                            </div>
                        </div>
                    </div>
        
                    {/* <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-0 shadow">
                            <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" className="card-img-top" alt="..."/>
                            <div className="card-body text-center">
                            <h5 className="card-title mb-0">Team Member</h5>
                            <div className="card-text text-black-50">Web Developer</div>
                            </div>
                        </div>
                    </div> */}
                </div>
           
            </div>
            
        </div>
    )
}

export default AdminInfo
