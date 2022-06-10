import React, { useState } from 'react'
import { omit } from 'lodash';
const useFormValidate = () => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'panNo':
                if (value.length != 9) {

                    // we will set the error state

                    setErrors({
                        ...errors,
                        panNo: 'panno should be of 9 digits'
                    })
                } else {
                    // set the error state empty or remove the error for panno input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "panNo");
                    setErrors(newObj);

                }
                break;
                case 'mobileNo':
                    if (value.length != 10) {
    
                        // we will set the error state
    
                        setErrors({
                            ...errors,
                            mobileNo: 'mobile number should be of 10 digits'
                        })
                    } else {
                        // set the error state empty or remove the error for panno input
    
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "mobileNo");
                        setErrors(newObj);
    
                    }
                    break;
            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;

            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;
            // case 'mobileNo':if(value.length === 10)
            // {

            // }

            default:
                break;
        }
    }


    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        })

    }


    return {
        values,
        errors,
        handleChange,
    }
}

export default useFormValidate