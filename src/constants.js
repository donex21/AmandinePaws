export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const INVALID_EMAIL_PASSWORD = 'INVALID EMAIL/PASSWORD';
export const GET_SINGLE_USER = 'GET_SINGLE_USER';
export const CLEAN_SINGLE_USER = 'CLEAN_SINGLE_USER';

// UserType
export const PENDING_VET = 'PENDING VETERINARIAN';
export const APPROVED_VET = 'APPROVED VETERINARIAN';
export const PENDING_PET_BOARDING = 'PENDING PET BOARDING';
export const APPROVED_PET_BOARDING = 'APPROVED PET BOARDING';
export const PENDING_PET_STORE = 'PENDING PET STORE';
export const APPROVED_PET_STORE = 'APPROVED PET STORE';
export const PET_OWNER = 'PET OWNER';

// FireBase Table Location
export const PET_OWNER_TABLE = "/UserDetails/Information";
export const PENDING_VET_TABLE = "/Unapproved/Veterinarian";
export const APPROVED_VET_TABLE = "/VeterinarianDetails/Information";
export const PENDING_PET_BOARDING_TABLE = "/Unapproved/Pet Boarding";
export const APPROVED_PET_BOARDING_TABLE = "/BoardingDetails/Information";
export const PENDING_PET_STORE_TABLE = "/Unapproved/Pet Supply";
export const APPROVED_PET_STORE_TABLE = "/SupplyStoreDetails/Information";
export const ALLUSERS = "/AllUsers";
export const CERTIFICATE = "/Certificate/images";
export const SLASH = "/"
export const CERT = "/Certificate";

// Approve Text Message
export const APPROVE_TEXT = ". \n\n This is Amandine Paws. \n\n We would like to inform you that your application has been approved as a ";
// Decline Text Message
export const DECLINE_TEXT = ". \n\n This is Amandine Paws. \n\n We would like to inform you that due to lack of evidence your application has been declined  as a ";             
export const GOOD_DAY = " Good Day ";
export const THANK_YOU =  ". \n\n Thank you and God Speed.";


// <<<<<<<<<<<<----React Table Columns---->>>>>>>>>>>>>>
// Veterinarian and Pet Owner Header Column
export const VeterinarianAndPetOwnerColumn = [
    {dataField: "email", text: "Email", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center', width: '25%'}, sort: true,},
    {dataField: "firstname", text: "First Name", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}, sort: true },
    {dataField: "lastname", text: "Last Name", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}, sort: true },
    {dataField: "address", text: "Address", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}},
    {dataField: "gender", text: "Gender", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}},
    {dataField: "phoneNo", text: "Contact Number", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}}   
]


// Pet Boarding and Pet Store Header Column
export const PetBoardingAndStoreColumn = [
    {dataField: "email", text: "Email", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center' , width: '25%'}, sort: true},
    {dataField: "name", text: "Business", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}, sort: true },
    {dataField: "address", text: "Address", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}},
    {dataField: "phoneNo", text: "Contact Number", headerStyle: { backgroundColor: 'rgba(90, 45, 162, 0.5)', textAlign: 'center'}}   
]



