
class AwarenessFence{
    /**
     * 
     * @param {String} fenceType 
     * @param {String} fenceMethod 
     * @param {Object} params 
     */
    constructor(fenceType, fenceMethod, params){
        this.fenceType = fenceType;
        this.fenceMethod = fenceMethod;
        this.params = params;
    }
    static and(...fences){
        return new CompositeFence(CompositeFence.AND, fences);
    }
    static or(...fences){
        return new CompositeFence(CompositeFence.OR, fences);
    }
    static not(fence){
        return new CompositeFence(CompositeFence.NOT, fences);
    }
}