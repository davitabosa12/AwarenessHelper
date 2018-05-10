class Fence{
    /**
     * Cria um par Nome, AwarenessFence
     * @param {String} fenceName O nome da fence
     * @param {Object} aFence AwarenessFence ou CompositeFence que a representa
     */
    constructor(fenceName, aFence){
        this.fenceName = fenceName;
        this.fence = aFence;
    }
    
    to_string(){
        //TODO: Transformar todas os parametros em um JSON
    }
    
}
Fence.Types = Object.freeze({
    BEACON : "beacon",
    DETECTED_ACTIVITY : "detected_activity",
    HEADPHONE : "headphone",
    LOCATION : "location",
    TIME : "time"
});