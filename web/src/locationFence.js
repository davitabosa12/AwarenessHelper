class LocationFence{
    static entering(latitude, longitude, radius){
        params = {
            latitude:latitude,
            longitude: longitude,
            radius:radius
        }
        return new AwarenessFence(Fence.Types.LOCATION,LocationFence.Methods.ENTERING,params);
    }
    static exiting(latitude, longitude, radius){
        params = {
            latitude:latitude,
            longitude: longitude,
            radius:radius
        }
        return new AwarenessFence(Fence.Types.LOCATION,LocationFence.Methods.EXITING,params);

    }
    static in(latitude, longitude, radius, dwellTimeMillis){
        params = {
            latitude:latitude,
            longitude: longitude,
            radius:radius,
            dwellTimeMillis: dwellTimeMillis
        }
        return new AwarenessFence(Fence.Types.LOCATION,LocationFence.Methods.IN,params);

    }
}

LocationFence.Methods = Object.freeze({
    ENTERING:"entering",
    EXITING:"exiting",
    IN:"in"
});