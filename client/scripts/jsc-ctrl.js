var jscCtrl = (function ($) {
    return {

        displayUsers: function (template, skills, users) {
            Mustache.parse(template);
            var rendered = Mustache.render(template, {
                skills: skills, users: users
            });
            $('#jsc-summary').html(rendered);
        },

        displaySkills: function (template, skills) {
            Mustache.parse(template);
            var rendered = Mustache.render(template, {
                skills: skills
            });
            $('#jsc-skills').html(rendered);
        }

    };
})($);
