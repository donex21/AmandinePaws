import React, { useMemo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import dataservice from '../../service/dataservice';
import { getSingleUser } from '../../store/actions/adminUserAction';
import { VeterinarianAndPetOwnerColumn,  APPROVED_VET } from '../../constants'
import { connect } from 'react-redux';

function ApprovedVet(props) {
    const history = useHistory();
    const [approvedVet, setApprovedVet] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const column = useMemo(() => VeterinarianAndPetOwnerColumn, []);

    // firebase callback function
    const onDataChangedVet = ( items ) => {
        let profile = [];
    
        items.forEach(( item ) => {
          let key = item.key;
          let data = item.val();
          profile.push({
            uid: key,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            gender: data.gender,
            phoneNo: data.phoneNo,
            userType: data.userType,
            imgProfile: data.imgProfile,
            ratings: data.ratings
          });
        });
    
        setApprovedVet( profile );
    };
        
    useEffect(() => {
        dataservice.getAll( APPROVED_VET ).on("value", onDataChangedVet);
    
        return () => {
            dataservice.getAll( APPROVED_VET ).off("value", onDataChangedVet);
        };
      }, []);

    const rowEvents = {
        onDoubleClick: (e, row) => {
           //console.log(row);   
           props.getSingleUser(row);
           history.push('/SingleApprovedVet');
        }
    }
    const selectRow = {
        mode: "radio",
        clickToSelect: true,
        bgColor: 'rgba(90, 45, 162, 0.5)',
    };

    const searchOnChange = ( e ) => {
        setSearchInput( e.target.value )
        let newArray = approvedVet.filter(( singleVet ) => { 
            let searchValue = singleVet.email.toLowerCase();
            return searchValue.indexOf( e.target.value ) !==-1;
        });
        setFilterItems( newArray );
    }

    return (
        <div>
            <div className = "row justify-content-md-center mb-3">
                <div className="col-lg-auto">
                    <h2 className = "">Veterinarian List</h2>
                </div>
            </div>
            <div className = "row justify-content-md-center mb-5">
                <div className = " col-4 d-flex justify-content-center">
                <input type="text" className="form-control" value = { searchInput } onChange = { searchOnChange } placeholder="Search Email Here"/>
                </div>
            </div>
            <div className = "row">
                <span> Total Records: {approvedVet.length}</span>
            </div>
            <div className = "row">
                <BootstrapTable
                    striped 
                    keyField = "email"
                    data = {!searchInput? approvedVet : filterItems}
                    columns = {column}
                    pagination = {paginationFactory()}
                    rowEvents = {rowEvents}
                    selectRow = {selectRow}
                />  
            </div>      
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getSingleUser: (user) => dispatch(getSingleUser(user)),
    }
}

export default connect( null, mapDispatchToProps ) (ApprovedVet)
