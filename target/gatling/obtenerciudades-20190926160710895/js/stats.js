var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "581",
        "ok": "581",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2242",
        "ok": "2242",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "778",
        "ok": "778",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles1": {
        "total": "763",
        "ok": "762",
        "ko": "-"
    },
    "percentiles2": {
        "total": "786",
        "ok": "786",
        "ko": "-"
    },
    "percentiles3": {
        "total": "996",
        "ok": "996",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1261",
        "ok": "1261",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 474,
        "percentage": 82
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 99,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.525",
        "ok": "9.525",
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
        "total": "581",
        "ok": "581",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2242",
        "ok": "2242",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "778",
        "ok": "778",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles1": {
        "total": "762",
        "ok": "763",
        "ko": "-"
    },
    "percentiles2": {
        "total": "786",
        "ok": "786",
        "ko": "-"
    },
    "percentiles3": {
        "total": "996",
        "ok": "996",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1261",
        "ok": "1261",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 474,
        "percentage": 82
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 99,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.525",
        "ok": "9.525",
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
