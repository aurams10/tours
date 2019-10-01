var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "484",
        "ok": "484",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "713",
        "ok": "713",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3004",
        "ok": "3004",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles1": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "percentiles2": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1341",
        "ok": "1341",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2258",
        "ok": "2258",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 114,
        "percentage": 24
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 325,
        "percentage": 67
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 45,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.806",
        "ok": "7.806",
        "ko": "-"
    }
},
contents: {
"req_smoketest-ebeac": {
        type: "REQUEST",
        name: "SmokeTest",
path: "SmokeTest",
pathFormatted: "req_smoketest-ebeac",
stats: {
    "name": "SmokeTest",
    "numberOfRequests": {
        "total": "484",
        "ok": "484",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "713",
        "ok": "713",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3004",
        "ok": "3004",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "944",
        "ok": "944",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "271",
        "ko": "-"
    },
    "percentiles1": {
        "total": "868",
        "ok": "868",
        "ko": "-"
    },
    "percentiles2": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1341",
        "ok": "1341",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2258",
        "ok": "2258",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 114,
        "percentage": 24
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 325,
        "percentage": 67
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 45,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.806",
        "ok": "7.806",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
