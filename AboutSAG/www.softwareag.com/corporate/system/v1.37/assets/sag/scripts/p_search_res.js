$("#frmPartFinder").submit(function (event) {
    // Stop form from submitting normally
    event.preventDefault();
    $("#results").load("partner_finder_results.html #container", $("#frmPartFinder").serialize());
});