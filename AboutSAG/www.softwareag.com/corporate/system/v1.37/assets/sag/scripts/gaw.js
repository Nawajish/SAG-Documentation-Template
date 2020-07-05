/* ==================================================
   Google AdWords Tracking / Hand over
   ================================================== */

var urlQuery = window.location.search;
var urlParams = {};
function getUrlParams() {
    var query = urlQuery.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        urlParams[pair[0]] = pair[1];
    }
}

$(document).ready(function () {
    getUrlParams();
    if (urlParams.hasOwnProperty('utm_source')
        && urlParams.hasOwnProperty('utm_campaign')
        && urlParams.hasOwnProperty('utm_medium')) {
        $('a[data-gaw="true"]:not(a[href^="#"])').each(function () {
            $linkUrl = $(this).attr('href');
            if ($linkUrl.indexOf('?') < 0) {
                $(this).attr('href', $linkUrl + urlQuery);
            }
            else {
                $(this).attr('href', $linkUrl + '&' + urlQuery.substring(1));
            }
        });
    }
});
