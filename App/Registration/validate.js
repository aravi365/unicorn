export const validate = values =>{
    const error = {};

    error.email=''
    error.firstname = ''
    error.lastname = ''
    
    error.phone = ''
    error.password=''
    error.confirm_password=''

    let ema = values.email;
    let fname = values.firstname
    let lname = values.lastname
    
    let nm = values.name
    let ph = values.phone
    let pass = values.password
    let conf_pass = values.confirm_password

    if(ema === 'undefined' || ema == ''){
        error.email = 'email is required'
    }

    if(fname === 'undefined' || fname==''){
       error.firstname = "firstname is required"
    }

    if((ema && ema.length < 8) && ema!==''){
        error.email = 'too short'
    }

    if((ema && !ema.includes('@')) && ema !==''){
        error.email = '@ not included'
    }
    if((fname && fname.length) > 8){
        error.name = 'max 8 characters'
    }

    if(lname === 'undefined' || lname==''){
        error.lastname = "lastname is required"
     }

     if((lname && lname.length) > 8){
        error.lastname = 'max 8 characters'
    }



    if((ph && ph.length<10)){
        error.phone = 'min 10 numbers'
    }

    if((pass && pass.length<6)){
        error.password = 'atleast 6 characters'
    }

    if(pass==undefined || pass==''){
        error.password = 'required'
    }

    if(conf_pass != pass && conf_pass != ''){
        error.confirm_password = 'Passwords Do not match'
    }

    return error;
}