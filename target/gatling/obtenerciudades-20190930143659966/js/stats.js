var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3900",
        "ok": "3634",
        "ko": "266"
    },
    "minResponseTime": {
        "total": "705",
        "ok": "705",
        "ko": "10114"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59881",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "14120",
        "ok": "12322",
        "ko": "38685"
    },
    "standardDeviation": {
        "total": "18274",
        "ok": "16385",
        "ko": "24099"
    },
    "percentiles1": {
        "total": "2441",
        "ok": "2091",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "26108",
        "ok": "24100",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "57022",
        "ok": "46999",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57447",
        "ko": "60006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 215,
        "percentage": 6
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1088,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2331,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 266,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "22.159",
        "ok": "20.648",
        "ko": "1.511"
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
        "total": "3900",
        "ok": "3634",
        "ko": "266"
    },
    "minResponseTime": {
        "total": "705",
        "ok": "705",
        "ko": "10114"
    },
    "maxResponseTime": {
        "total": "60011",
        "ok": "59881",
        "ko": "60011"
    },
    "meanResponseTime": {
        "total": "14120",
        "ok": "12322",
        "ko": "38685"
    },
    "standardDeviation": {
        "total": "18274",
        "ok": "16385",
        "ko": "24099"
    },
    "percentiles1": {
        "total": "2441",
        "ok": "2091",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "26108",
        "ok": "24100",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "57022",
        "ok": "46999",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57447",
        "ko": "60006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 215,
        "percentage": 6
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1088,
        "percentage": 28
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2331,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 266,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "22.159",
        "ok": "20.648",
        "ko": "1.511"
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
