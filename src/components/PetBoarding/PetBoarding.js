import React from 'react'
import ApprovedPetBoarding from './ApprovedPetBoarding'
import PendingPetBoarding from './PendingPetBoarding'

function PetBoarding() {
    return (
        <div className = "container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="true">Pending</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="approved-tab" data-bs-toggle="tab" data-bs-target="#approved" type="button" role="tab" aria-controls="approved" aria-selected="false">Approved</button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                <PendingPetBoarding/>
            </div>
            <div className="tab-pane fade" id="approved" role="tabpanel" aria-labelledby="approved-tab">
                <ApprovedPetBoarding/>
            </div>
        </div>
    </div>
    )
}

export default PetBoarding
