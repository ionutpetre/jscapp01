var jscMain = (function (jscHttp, jscCtrl) {
    var self = this;

    this.skills = [];
    this.users = [];

    var jscApp = $.sammy(function () {
        this.get('#/summary', function (context) {

            /* Get data from jsc http service */
            jscHttp.getSkills(function (skillsHttp, err) {
                console.info('Skills from Http: ', skillsHttp);
                self.skills = skillsHttp;
                jscCtrl.displaySkills(self.skills);

                /* TODO: do the same for users */
                jscHttp.getUsers(function (usersHttp, err) {
                    console.info('Users from Http: ', usersHttp);
                    self.users = usersHttp;
                });
            });
        });
    });

    $(function () { jscApp.run('#/summary'); });

})(jscHttp, jscCtrl);
