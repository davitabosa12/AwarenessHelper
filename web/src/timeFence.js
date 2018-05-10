class TimeFence{
    /**
     * 
     * @param {Number} timeInstant 
     * @param {Number} startOffsetMillis 
     * @param {Number} stopOffsetMillis 
     */

    static aroundTimeInstant(timeInstant, startOffsetMillis, stopOffsetMillis){
        var params = {
            timeInstant: timeInstant,
            startOffsetMillis: startOffsetMillis,
            stopOffsetMillis: stopOffsetMillis
        }
        return new AwarenessFence(Fence.Types.TIME, TimeFence.Methods.AROUND_TIME_INSTANT, params);
    }
    /**
     * 
     * @param {String} timeZone 
     * @param {Number} startTimeOfDayMillis 
     * @param {Number} stopTimeOfDayMillis 
     */
    static inDailyInterval(timeZone, startTimeOfDayMillis, stopTimeOfDayMillis){
        var params = {
            timeZone: timeZone,
            startTimeOfDayMillis: startTimeOfDayMillis,
            stopTimeOfDayMillis: stopTimeOfDayMillis
        }
        return new AwarenessFence(Fence.Types.TIME, TimeFence.Methods.IN_DAILY_INTERVAL, params);
    }

    /**
     * 
     * @param {*} startTimeMillis 
     * @param {*} stopTimeMillis 
     */
    static inInterval(startTimeMillis, stopTimeMillis){
        var params = {
            startTimeMillis: startTimeMillis,
            stopTimeMillis: stopTimeMillis
        }
        return new AwarenessFence(Fence.Types.TIME, TimeFence.Methods.IN_INTERVAL, params);
    }
    /**
     * 
     * @param {*} dayOfWeek 
     * @param {*} timeZone 
     * @param {*} startTimeOfDayMillis 
     * @param {*} stopTimeOfDayMillis 
     */
    static inIntervalOfDay(dayOfWeek, timeZone, startTimeOfDayMillis, stopTimeOfDayMillis){
        var params = {
            dayOfWeek: dayOfWeek,
            timeZone: timeZone,
            startTimeOfDayMillis: startTimeOfDayMillis,
            stopTimeOfDayMillis: stopTimeOfDayMillis
        }
        return new AwarenessFence(Fence.Types.TIME, TimeFence.Methods.IN_INTERVAL_OF_DAY, params);
    }
    /**
     * 
     * @param {*} timeInterval 
     */
    static inTimeInterval(timeInterval){
        var params = {
            timeInterval: timeInterval
        }
        return new AwarenessFence(Fence.Types.TIME, TimeFence.Methods.IN_TIME_INTERVAL, params);
    }
}

TimeFence.Methods = Object.freeze({
    AROUND_TIME_INSTANT = "aroundTimeInstant",
    IN_DAILY_INTERVAL = "inDailyInterval",
    IN_INTERVAL:"inInterval",
    IN_INTERVAL_OF_DAY:"inIntervalOfDay",
    IN_TIME_INTERVAL:"inTimeInterval"
});

TimeFence.TimeInterval = Object.freeze({
    SUNRISE: "sunrise",
	SUNSET: "sunset",
	AFTERNOON: "afternoon",
	EVENING	: "evening",
	HOLIDAY	: "holiday",
	MORNING	: "morning",
	NIGHT	: "night",
	WEEKDAY: "weekday",
	WEEKEND	: "weekend"
});

TimeFence.DayOfWeek = Object.freeze({
	FRIDAY :"friday",
    MONDAY :"monday",
    SATURDAY :"saturday",
    SUNDAY :"sunday",
    THURSDAY :"thursday",
    TUESDAY :"tuesday",
    WEDNESDAY :"wednesday"
});