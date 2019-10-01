var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "54",
        "ok": "54",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3140",
        "ok": "3140",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "957",
        "ok": "957",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "367",
        "ok": "367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1368",
        "ok": "1368",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2530",
        "ok": "2530",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 59
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.5",
        "ok": "4.5",
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
        "total": "54",
        "ok": "54",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3140",
        "ok": "3140",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "957",
        "ok": "957",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "367",
        "ok": "367",
        "ko": "-"
    },
    "percentiles1": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1368",
        "ok": "1368",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2530",
        "ok": "2530",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 59
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "4.5",
        "ok": "4.5",
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
