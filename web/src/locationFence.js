class LocationFence{
    constructor(fenceName){
        var _fenceName = fenceName;
        this.getFenceName = function(){
            return _fenceName;
        }
        this.setFenceName = function(newName){
            _fenceName = newName;
        }
        
    }
    setMethod(methodName, ...params){
        var success = false;
        switch(methodName){
            case "entering": //É o mesmo de exiting
            case "exiting":
                if( arguments.length < 4 )
                    throw "Invalid arguments for method \"entering\". Expected 4, got " + arguments.length;
                if( isNaN(arguments[1]) || isNaN(arguments[2]) || isNan(arguments[3]) )
                    throw "Invalid arguments for method \"entering\". Some are not a number."
                success = true;
                break;
            case "in":
                if( arguments.length < 5 )
                    throw "Invalid arguments for method \"entering\". Expected 5, got " + arguments.length;
                if( isNaN(arguments[1]) || isNaN(arguments[2]) || isNan(arguments[3]) || isNaN(arguments[4]) )
                    throw "Invalid arguments for method \"entering\". Some are not a number."
                success = true;
                break;
        }

        if(success){
            var _method = {
                name: methodName,
                latitude: arguments[1],
                longitude: arguments[2],
                radius: arguments[3],
                dwellTimeMillis: arguments[4]
            };

            var getMethod = function(){
                return _method;
            }
        }
    }
}