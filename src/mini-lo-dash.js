;(function (root) {
    var _ = root._ = (root._ || {});

    // start writing your code here
    _.each = function (array, callback) {
        for (var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    };

    _.any = function (array, callback) {
        for (var i = 0; i <array.length; i++) {
            if (callback(array[i])) {
                return true;
            }
        }
        return false;
    }

    _.map = function (array, callback) {
        var resultsArray = [];
        for (var i = 0; i < array.length; i++) {
            resultsArray.push(callback(array[i]))
        }
        return resultsArray;
    }

    _.select= function (array, callback) {
        var resultsArray = [];
        for (var i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                resultsArray.push(array[i]);
            }
        }
        return resultsArray;
    }

    _.reject = function (array, callback) {
        var resultsArray = [];
        for (var i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                resultsArray.push(array[i]);
            }
        }
        return resultsArray;
    }

    _.reduce = function (array, callback, accumulator) {
        var accumulator = accumulator || array.shift();
        for (var i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i]);
        }
        return accumulator;
    }

    _.sample = function (array) {
        var randomIndex = Math.floor((Math.random() * array.length));
        return array[randomIndex];
    }







})(window);
