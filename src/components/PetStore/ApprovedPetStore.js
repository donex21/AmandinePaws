import React, { useMemo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import dataservice from '../../service/dataservice';
import { getSingleUser } from '../../store/actions/adminUserAction';
import { connect } from 'react-redux';

import { PetBoardingAndStoreColumn, APPROVED_PET_STORE } from '../../constants'

function ApprovedPetStore (props) {
    const history = useHistory()
    const [petStores, setPetStores] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const column = useMemo(() => PetBoardingAndStoreColumn, []);

    // firebase callback function
    const onDataChangedPetStores = ( items ) => {
        let profile = [];
    
        items.forEach(( item ) => {
          let key = item.key;
          let data = item.val();
          profile.push({
            uid: key,
            email: data.email,
            name: data.name,
            address: data.address,
            phoneNo: data.phoneNo,
            userType: data.userType,
            imgProfile: data.imgProfile,
            ratings: data.ratings
          });
        });
    
        setPetStores( profile );
    };
        
    useEffect(() => {
        dataservice.getAll( APPROVED_PET_STORE ).on("value", onDataChangedPetStores);
    
        return () => {
            dataservice.getAll( APPROVED_PET_STORE ).off("value", onDataChangedPetStores);
        };
      }, []);

    const rowEvents = {
        onDoubleClick: (e, row) => {
           //console.log(row);   
           props.getSingleUser(row);
           history.push('/SingleApprovedPetStore');
        }
    }
    const selectRow = {
        mode: "radio",
        clickToSelect: true,
        bgColor: 'rgba(90, 45, 162, 0.5)',
      };

    const searchOnChange = ( e ) => {
        setSearchInput( e.target.value )
        let newArray = petStores.filter(( store ) => { 
            let searchValue = store.email.toLowerCase();
            return searchValue.indexOf( e.target.value ) !==-1;
        });
        setFilterItems( newArray );
    }

    return (
        <div>
            <div className = "row justify-content-md-center mb-3">
                <div className="col-lg-auto">
                    <h2 className = "">Pet Store List</h2>
                </div>
            </div>
            <div className = "row justify-content-md-center mb-5">
                <div className = " col-4 d-flex justify-content-center">
                <input type="text" className="form-control" value = { searchInput } onChange = { searchOnChange } placeholder="Search Email Here"/>
                </div>
            </div>
            <div className = "row">
                <span> Total Records: {petStores.length}</span>
            </div>
            <div className = "row">
                <BootstrapTable
                    striped 
                    keyField = "email"
                    data = {!searchInput? petStores : filterItems}
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

export default connect (null, mapDispatchToProps) (ApprovedPetStore)
