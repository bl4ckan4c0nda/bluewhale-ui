import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
//Vendor
import './src/clipboard'
import './src/dropdown';
import './src/tooltip';
import './src/popover';
import { EnableActivationTabsFromLocationHash } from './src/tab';
import './src/toast';
// import './src/dark'
// import './src/user-profile-mobile'
// import './src/sidenav'
import './src/switcher-mode'
import './src/wizard'
import './src/toggle-password'
import './src/crypto-selector'



EnableActivationTabsFromLocationHash();

// import css
require('../styles/bluewhale.scss')