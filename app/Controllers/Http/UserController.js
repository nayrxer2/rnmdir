'use strict'

const Rnmuser = use('App/Models/Rnmuser');

class UserController {
    async home({view}) {
        const rnmusers = await Rnmuser.all();

        return view.render('rnmuser', { rnmusers: rnmusers.toJSON() });
    }
}

module.exports = UserController
