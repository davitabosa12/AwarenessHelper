class DetectedActivityFence{

    static during(...activityTypes){
        return new AwarenessFence(Fence.Types.DETECTED_ACTIVITY, 
            DetectedActivityFence.Methods.DURING, activityTypes);
    }
    static starting(...activityTypes){
        return new AwarenessFence(Fence.Types.DETECTED_ACTIVITY, 
            DetectedActivityFence.Methods.STARTING, activityTypes);

    }
    static stopping(...activityTypes){
        return new AwarenessFence(Fence.Types.DETECTED_ACTIVITY, 
            DetectedActivityFence.Methods.STOPPING, activityTypes);

    }
}
DetectedActivityFence.Methods = Object.freeze({
    DURING:"during",
    STARTING:"starting",
    STOPPING:"stopping"
});
DetectedActivityFence.IN_VEHICLE = "in_vehicle";
DetectedActivityFence.ON_BICYCLE = "on_bicycle";
DetectedActivityFence.ON_FOOT = "on_foot";
DetectedActivityFence.RUNNING = "running";
DetectedActivityFence.STILL = "still";
DetectedActivityFence.UNKNOWN = "unknown";
DetectedActivityFence.WALKING = "walking";