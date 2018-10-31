export const validateEmail=(email)=>{
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailCheckRegex.test(email)){
        return true;
    }else if(!emailCheckRegex.test(email)){
        return false;
    }    
};

export const validatePlate=(plate)=>{
    let regexPlate = new RegExp("[a-zA-Z]{3}[0-9]{4}");
    if(regexPlate.test(plate)){
        return true;
    }else if(!regexPlate.test(plate)){
        return false;
    }
    
}
