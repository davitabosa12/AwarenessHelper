class HeadphoneFence {
    static during(headphoneState){
        var params = {
            headphoneState: headphoneState
        }
        return new AwarenessFence(Fence.Types.HEADPHONE,
            HeadphoneFence.Methods.DURING,params);
    }
    static pluggingIn(){
        return new AwarenessFence(Fence.Types.HEADPHONE,
            HeadphoneFence.Methods.PLUGGING_IN );
    }
    static unplugging(){

        return new AwarenessFence(Fence.Types.HEADPHONE,
            HeadphoneFence.Methods.UNPLUGGING );
    }
}

HeadphoneFence.Methods = Object.freeze({
    DURING:"during",
    PLUGGING_IN:"pluggingIn",
    UNPLUGGING:"unplugging"
});

HeadphoneFence.States = Object.freeze({
    PLUGGED_IN: "pluggedIn",
    UNPLUGGED: "unplugged"
});