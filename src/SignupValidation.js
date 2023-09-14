export default function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.name===""){
        error.name = "Email should not be empty"
    }

    else if(!email_pattern.test(values.email)){
        error.name = "Email didnt Match"
    }else{
        error.name = ""
    }
    if(values.email===""){
        error.email = "Email should not be empty"
    }

    else if(!email_pattern.test(values.email)){
        error.email = "Email didnt Match"
    }else{
        error.email = ""
    }



    if(values.password===""){
        error.password = "Enter the field"
    }

    else if(!password_pattern.test(values.password)){
        error.email = "Password didnt Match"
    }else{
        error.email = ""
    }

    return error;



}