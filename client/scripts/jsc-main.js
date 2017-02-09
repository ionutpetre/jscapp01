var jscMain = (function (jscHttp, jscCtrl) {
    var self = this;

    this.skills = [];
    this.users = [];

    var jscApp = $.sammy(function () {

        this.get('#/summary', function (context) {
            jscHttp.getSkills(function (skillsHttp, err) {
                console.info('Skills from Http: ', skillsHttp);
                self.skills = skillsHttp;
                jscHttp.getUsers(function (usersHttp, err) {
                    console.info('Users from Http: ', usersHttp);
                    self.users = usersHttp;
                    $.get('templates/summary.mustache', function (template) {
                        jscCtrl.displayUsers(template, self.skills, self.users);
                    }, 'text');
                });
            });
        });

    });

    $(function () { jscApp.run('#/summary'); });

})(jscHttp, jscCtrl);
