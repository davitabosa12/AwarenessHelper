class Fence{
    constructor(fenceName){
        this._fenceName = fenceName;
    }
    FenceTypes = Object.freeze({
        BEACON : 0,
        DETECTED_ACTIVITY : 1,
        HEADPHONE : 2,
        LOCATION : 3,
        TIME : 4
    });
    setFenceType(fenceType){
        if( fenceType == this.FenceTypes.BEACON || fenceType == this.FenceTypes.DETECTED_ACTIVITY || fenceType == this.FenceTypes.HEADPHONE ||
            fenceType == this.FenceTypes.LOCATION || fenceType == this.FenceTypes.TIME)
            this._fenceType = fenceType;
        else
            throw("Incompatible Fence Type");
    }
    setFenceMethod(){
        
    }
    
}