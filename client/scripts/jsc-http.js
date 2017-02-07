var jscHttp = (function ($) {

    var GET_USERS_URL = 'http://jscapp01.getsandbox.com/v1/users',
        GET_SKILLS_URL = 'http://jscapp01.getsandbox.com/v1/skills';

    return {

        getUsers: function (callback) {
            $.get(GET_USERS_URL, function (data) {
                callback(data);
            }).fail(function () {
                callback(undefined);
            });
        },

        getSkills: function (callback) {
            $.get(GET_SKILLS_URL, function (data) {
                callback(data);
            }).fail(function () {
                callback(undefined);
            });
        }

    };

})($);
