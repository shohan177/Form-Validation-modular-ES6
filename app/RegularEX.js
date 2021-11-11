//password message
let passWarningContainer = document.querySelector('.pass-roll');
let upper = document.querySelector('.pass-roll .upper');
let low = document.querySelector('.pass-roll .low');
let Wnumber = document.querySelector('.pass-roll .Wnumber');
let Wspecial = document.querySelector('.pass-roll .Wspecial');

class RegEx {

    static email(val) {

        let pettern = /^[a-z0-9_.-]*@[a-z0-9]*\.[a-z]{2,5}$/;

        if (pettern.test(val)) {
            return true;
        } else {
            return false;
        }

        
    }
    static phone(val) {

        let pettern = /^\+880[0-9]{10,10}$/;

        if (pettern.test(val)) {
            return true;
        } else {
            return false;
        }

        
    }

    
    
    static passWord(val) {

        let pattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*[0-9])(?=.*[#$%&]).{6,20}$/;
        let lowerCase = /^(?=.*?[a-z]).*$/;
        let upperCase = /^(?=.*?[A-Z]).*$/;
        let number = /^(?=.*[0-9]).*$/;
        let syntax = /^(?=.*[#$%&]).*$/;
  
        if (pattern.test(val)) {
            passWarningContainer.style.display = "none"
            return true
        } else {
            passWarningContainer.style.display = "block"
            if (lowerCase.test(val)) { low.style.color = "green"  }else{low.style.color = "red"}
            if (upperCase.test(val)) { upper.style.color = "green" }else{upper.style.color = "red"}
            if (number.test(val)) { Wnumber.style.color = "green"  }else{Wnumber.style.color = "red"}
            if (syntax.test(val)) { Wspecial.style.color = "green" }else{Wspecial.style.color = "red"}
    
            return false
        }
    }

//class end
}

export default RegEx;