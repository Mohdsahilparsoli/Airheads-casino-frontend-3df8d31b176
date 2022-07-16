/* eslint-disable no-useless-escape */
export const inputFieldsValidators = (type, input) => {
    let noError =  {errorCode: false, errorText:'' }
    
    switch(type){
      case 'name':
      case 'firstName':
      case 'lastName':
      case 'nickName':
          return input.length === 0 ? {errorCode: true, errorText: "Name couldn't be empty"}: noError

        case 'email':
          if (input.length === 0){
            return {errorCode: true, errorText: "Email couldn't be empty"}
          } 
          if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))){
            return {errorCode: true, errorText: "Please Enter Correct Email"}
          }
          return noError
            
        case 'password':
          if (input.length === 0){
            return {errorCode: true, errorText: "Password field couldn't be empty"}
          } 
          // if (input.length < 8){
          //   return {errorCode: true, errorText: "Password field couldn't be less then 8 symbols"}
          // }
          return noError

        case 'city': 
        case 'City':
            return input.length === 0 ? {errorCode: true, errorText: "City couldn't be empty"} : noError
    
        case 'country': 
        case 'Country':
            return input.length === 0 ? {errorCode: true, errorText: "Country couldn't be empty"} : noError

        case 'streetName':
        case 'address':
            return input.length === 0 ? {errorCode: true, errorText: "Street Name couldn't be empty"} : noError

        case 'houseNumber':
            if (input.length === 0) {
                return {errorCode: true, errorText: "House Number couldn't be empty"}
            }
            if (!(/^[0-9]*$/.test(input))) {
                return {errorCode: true, errorText: "Please Enter Correct House Number"}
            }
            return noError

            
        default:
          return {errorCode: true, errorText: "Ooops, something went wrong"}
    }
}

