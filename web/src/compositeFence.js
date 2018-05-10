class CompositeFence{
    constructor(compositionType, fences){
        this.compositionType =  compositionType;
        this.fenceList = fences;
    }
}

CompositeFence.AND = "and";
CompositeFence.OR = "or";
CompositeFence.NOT = "not";
