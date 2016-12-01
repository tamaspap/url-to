(function(URLTo, undefined) {

    var baseURL;
    var apiBaseURL;

    /**
     * Set/Get the base URL
     *
     * @param   {string}    url
     * @returns {string}
     */
    URLTo.base = function(url) {
        (url !== undefined) && (baseURL = url);

        // If no base url set, try to get it automatically
        if (baseURL === undefined) {
            baseURL = window.location.origin || window.location.protocol + "//" + window.location.host;
        }

        return baseURL;
    };


    /**
     * Fetch an absolute page URL based on a URI segment
     *
     * @param   {string}    uri
     * @param   {object}    replacePairs
     * @returns {string}
     */
    URLTo.page = function(uri, replacePairs) {        
        return URLTo.build(URLTo.base(), uri, replacePairs);
    };


    /**
     * Fetch an absolute api URL based on a URI segment
     *
     * @param   {string}    uri
     * @param   {object}    replacePairs
     * @returns {string}
     */
    URLTo.api = function(uri, replacePairs) {
        return URLTo.build(URLTo.apiBase(), uri, replacePairs);
    };


    /**
     * Set/Get the api base url
     *
     * @param   {string}    url
     * @returns {string}
     */
    URLTo.apiBase = function(url) {
        (url !== undefined) && (apiBaseURL = url);
        return apiBaseURL || URLTo.page("api");
    };


    /**
     * Build a url.
     *
     * @param   {string}    baseUrl
     * @param   {string}    uri
     * @param   {object}    replacePairs
     * @returns {string}
     */
    URLTo.build = function(baseUrl, uri, replacePairs) {
        var url = baseUrl + "/" + uri;
        return replace(url, replacePairs);
    }


    /**
     * Replace pairs in a string
     *
     * @param   {string}  str
     * @param   {object}  pairs
     * @returns {string}
     */
    function replace(str, pairs) {
        pairs = pairs || [];
        var i, key, regexp, objectType = Object.prototype.toString.call(pairs);

        // Replace pairs
        if (objectType == "[object Array]") {
            for (i = 0; i < pairs.length; i++) {
                regexp = new RegExp("\\$" + (i + 1), "g");
                str = str.replace(regexp, pairs[i]);
            }
        }
        else if (objectType == "[object Object]") {
            for (key in pairs) {
                regexp = new RegExp(key, "g");
                str = str.replace(regexp, pairs[key]);
            }
        }

        return str;
    }

    window.URLTo = URLTo;

}({}));