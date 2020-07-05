(function () {
    var list = document.getElementsByTagName('a');
    //var pattern = /^https?:[/]{2}(www[.])?softwareag[.]com/i;
    //var test = window.location.origin;

    for (var i = 0; i < list.length; i++) {
        var anchor = list[i];
        anchor.setAttribute('data-gaw', 'true');
    }
})();