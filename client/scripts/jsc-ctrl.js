var jscCtrl = (function ($) {
    return {
        displaySkills: function (skills) {
            var template = $('#skills-template').html();
            Mustache.parse(template);
            var rendered = Mustache.render(template, { skills: skills });
            $('#skills').html(rendered);
        }
    };
})($);
