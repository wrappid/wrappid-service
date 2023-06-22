const communicationUtils = {
    clearValidatePhoneEmail: (text) => {
        if (text[0] == "'") {
            text = text.slice(1);
            text = text.toLowerCase();
        }
        let valid = String(text).match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        if (valid) {
            return { valid: valid, type: constant.communication.EMAIL };
        } else if (!valid) {
            valid = String(text).match(
                /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
            );

            if (valid) {
                return { valid: valid, type: constant.communication.SMS };
            } else {
                return { valid: valid, type: "" };
            }
        }

        //return [valid, text];
    }
}

module.exports = communicationUtils;