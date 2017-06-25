/**
 * Created by bar on 25/06/17.
 */

import {Accounts} from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

