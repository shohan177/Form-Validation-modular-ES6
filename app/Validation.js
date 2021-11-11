class Validate{

    //mesage set 
    static setMes(msg) {
        return `${msg}`
    }


    //required message
    static required( msg) {
        if (msg != 0 ) {

            return `${msg} field is required !`;
            
        } else {
            
            return ``;
        }
    }

    //empty check
    static empty(val) {
        
        if (val == "") {
            return true;
        } else {
            return false;
        }

    }
}

export default Validate;