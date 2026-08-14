let testResults = ["PASS", "FAIL", "PASS", "SKIP"];

testResults.forEach(function (result1, index1) {
    console.log("Test " + index1 + " -> " + result1)
});

// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.