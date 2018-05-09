class HeadphoneFence {
    constructor(fenceName){
        var _fenceName = fenceName;
        this.getFenceName = function(){
            return _fenceName;
        }
        this.setFenceName = function(newName){
            _fenceName = newName;
        }
        
    }
    

    /**
     * 
     * @param {String} methodName 
     * @param {*} params 
     */
    setMethod(methodName, ...params){
        var success = false;
        if(methodName == "during"){
            if(arguments.length <= 1){
                throw("Invalid argument length for \"during\": expected 2, got " + arguments.length);
            }
            else if(!(arguments[1] == "pluggedIn" || arguments[1] == "unplugged")){
                throw("Invalid argument for \"during\": parameter is not \"pluggedIn\" or \"unplugged\".");
            }
            else{
                success = true;
            }
            
        }

        else if(methodName == "pluggingIn"){
            success = true;
        }

        else if(methodName == "unplugging"){
            
            success = true;
        }
        if(success){
            var _method = {
                name: methodName,
                state: arguments[1]
            }
            this.getMethod = function(){
                return _method;
            }
        }
        else
            throw "Arguments not valid. First argument must be: \"during\", \"pluggingIn\" or \"unplugging\"";  
        
    }
}