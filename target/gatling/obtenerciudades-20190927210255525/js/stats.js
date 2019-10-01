var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "433",
        "ok": "433",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "3895",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1045",
        "ok": "1045",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "percentiles1": {
        "total": "893",
        "ok": "893",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1084",
        "ok": "1084",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2092",
        "ok": "2092",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2702",
        "ok": "2702",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 112,
        "percentage": 26
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 242,
        "percentage": 56
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 79,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.098",
        "ok": "7.098",
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
        "total": "433",
        "ok": "433",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "3895",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1045",
        "ok": "1045",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "459",
        "ok": "459",
        "ko": "-"
    },
    "percentiles1": {
        "total": "893",
        "ok": "893",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1084",
        "ok": "1084",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2092",
        "ok": "2092",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2702",
        "ok": "2702",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 112,
        "percentage": 26
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 242,
        "percentage": 56
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 79,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.098",
        "ok": "7.098",
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
