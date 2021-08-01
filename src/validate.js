const validate = (values) => {
   const errors = {};
   if(!values.firstName){
   errors.firstName = "Last name is required"
   }
   else if(!/[!0-9@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/.test(values.firstName)){
   errors.name ="Invalid  last name"
   }
    

    if(!values.surName){
        errors.surName = "Surname is required"
    }
    else if(!/^[a-zA-Z ]+$/.test(values.surName)){
    errors.surName ="Invalid Surename"
    }


    if(!values.email){
    errors.email= "Email address is required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test (values.email)){
    errors.email = "Invalid email address"}


    if(!values.password){
        errors.password = "Password is required"
    }
    else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)){
     errors.password = " Password  must has min 8 letter, with at least a symbol, upper and lower case letters and a number"
    }
return errors
}

export default validate;




// const validate = (values) => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = "First name is required";
//     } else if (values.firstName.length < 1) {
//       errors.firstName = "Invalid First name";
//     } else {
//       errors.firstName = "Nice first name ";
//     }
  
//     if (!values.lastName) {
//       errors.lastName = "Last name is required";
//     } else if (values.lastName.length < 1) {
//       errors.lastName = "Invalid Last name";
//     } else {
//       errors.lastName = "Awesome last name ";
//     }
  
//     if (!values.email) {
//       errors.email = "Email address is required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
  
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length <= 6) {
//       errors.password = "Password length is weak ";
//     } else {
//       errors.password = "Password strength is ok ";
//     }
 
//     return errors;
//   };
  
// export default validate;

