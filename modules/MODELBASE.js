const fs = require('fs');

module.exports = class {
    
    static POSITIONS = {
        BEG : "BEG",
        END : "END",
    };
    
    constructor(Token_name = undefined,LAYOUT_TEXT_PATH="modules"){
        
        this.LAYOUT_TEXT_PATH = LAYOUT_TEXT_PATH;
        this.LAYOUT_TEXT = "";

        this.Token_name = Token_name;

        for(let line of fs.readdirSync(this.LAYOUT_TEXT_PATH,'utf8')){
            this.LAYOUT_TEXT += line
        }
        
    }

    AddInPosition(TOKEN_CONTEXT = "",POSITION = "", OBJ="") {
        
        let P_TOKEN = `\/\/{${this.Token_name}_${TOKEN_CONTEXT}_${POSITION}}`
        let N_OBJ   = "" 
        switch (POSITION) {
            case this.POSITIONS.BEG: {
                N_OBJ = `${P_TOKEN}\n${OBJ}`
                break;
            }
            
            case this.POSITIONS.END: {
                N_OBJ = `${OBJ}\n${P_TOKEN}`
                break;
            };
        }

        this.LAYOUT_TEXT = this.LAYOUT_TEXT.replace(P_TOKEN,N_OBJ)
    }


}