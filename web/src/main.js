var fenceConfig;
var fenceType;
var methodParams;
window.onload = function(){
    init();
}

function init(){
    fenceType = document.getElementById("fence_types");
    methodParams = document.getElementById("params");
    fenceType.addEventListener("change",updateSelectedFence,false);
    
    fenceConfig = document.getElementById("config");
    fenceType.dispatchEvent(new Event('change'));

    

}

function updateSelectedFence(event){
    var element = event.target;
        removeAllFromConfig();
    putSelect(nameToFenceType(element.value));
}

function putSelect(fenceType){
    var methodSelect = document.createElement("select");
    Object.keys(fenceType.Methods).forEach(element =>{
        var opt = document.createElement("option");
        opt.innerHTML = fenceType.Methods[element];
        opt.id = fenceType.Methods[element];
        methodSelect.options.add(opt);
    });
    //fenceConfig.appendChild(methodSelect);
    fenceConfig.insertBefore(methodSelect,fenceConfig.firstChild);
    methodSelect.addEventListener("change",updateParams,false);
    methodSelect.dispatchEvent(new Event('change'));
    
}

function updateParams(event){
    var method = event.target.value;
    var type = nameToFenceType(fenceType.value);
    putParams(type,method);

}
function putParams(fenceType,method){
    methodParams.innerHTML = "";
    var paramNames = getParamNames(fenceType[method]);
    paramNames.forEach(element => {
        var div = document.createElement("div");

        var label = document.createElement("p");
        label.innerHTML = element + ": ";

        var input = document.createElement("input");
        input.type = "text";
        input.id = element;

        div.appendChild(label);
        div.appendChild(input);

        methodParams.appendChild(div);
    });

    var button = document.createElement("button");
    button.innerHTML = "Create Fence";
    methodParams.appendChild(button);
}

function removeAllFromConfig(){
    fenceConfig.innerHTML = "";
    fenceConfig.appendChild(methodParams);
}

//https://stackoverflow.com/questions/1007981/how-to-get-function-parameter-names-values-dynamically
//by Jack Allan
function getParamNames(func) {
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
     result = [];
  return result;
}

function nameToFenceType(name){
    switch(name){
        case "headphone":
            return(HeadphoneFence);
        
        case "location": 
        return(LocationFence);
        
        case "detected_activity": 
        return(DetectedActivityFence);
        
        case "time": 
        return(TimeFence);
        
    }
}