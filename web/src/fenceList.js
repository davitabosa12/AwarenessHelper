class FenceList{
    constructor(){
        this.soloFences = [];
        this.compositeFences = [];
    }
    addFence(fenceObject){
        if(fenceObject.fence instanceof CompositeFence){
            this.compositeFences.push(fence);
            console.log("Added " + fence.fenceName + "");
            
        }
        else{
            this.list.push(fenceObject);
        }
        
    }
}