var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "587",
        "ok": "587",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2435",
        "ok": "2435",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles1": {
        "total": "761",
        "ok": "761",
        "ko": "-"
    },
    "percentiles2": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 499,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 73,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.623",
        "ok": "9.623",
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
        "total": "587",
        "ok": "587",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "666",
        "ok": "666",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2435",
        "ok": "2435",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "777",
        "ok": "777",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "172",
        "ok": "172",
        "ko": "-"
    },
    "percentiles1": {
        "total": "761",
        "ok": "761",
        "ko": "-"
    },
    "percentiles2": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1591",
        "ok": "1591",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 499,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 73,
        "percentage": 12
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.623",
        "ok": "9.623",
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
