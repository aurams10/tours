var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "707",
        "ok": "707",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "773",
        "ok": "773",
        "ko": "-"
    },
    "percentiles2": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1048",
        "ok": "1048",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1186",
        "ok": "1186",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 43
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.455",
        "ok": "5.455",
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
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "707",
        "ok": "707",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "823",
        "ok": "823",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "773",
        "ok": "773",
        "ko": "-"
    },
    "percentiles2": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1048",
        "ok": "1048",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1186",
        "ok": "1186",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 55
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 43
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.455",
        "ok": "5.455",
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
