var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "731",
        "ok": "731",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles2": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "percentiles4": {
        "total": "991",
        "ok": "991",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 43
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 57
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.727",
        "ok": "2.727",
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
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "731",
        "ok": "731",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "812",
        "ok": "812",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles1": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles2": {
        "total": "839",
        "ok": "839",
        "ko": "-"
    },
    "percentiles3": {
        "total": "932",
        "ok": "932",
        "ko": "-"
    },
    "percentiles4": {
        "total": "991",
        "ok": "991",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 43
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 17,
        "percentage": 57
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.727",
        "ok": "2.727",
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
