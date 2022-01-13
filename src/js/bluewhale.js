//Vendor
import './src/dropdown';
import './src/tooltip';
import './src/popover';
import { EnableActivationTabsFromLocationHash } from './src/tab';
import './src/toast';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

EnableActivationTabsFromLocationHash();

// import css
require('../styles/main.css');