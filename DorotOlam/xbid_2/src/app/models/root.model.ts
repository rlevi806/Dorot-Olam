//import { profileDetails } from './profilepage.model';
//import { registerDetails } from './registerpage.model';
//import { landingDetails } from './landingpage.model';
//import { indexDetails } from './index.model';
//
//export class root {
//    constructor(
//        public profileDetails: profileDetails,
//        public registerDetails: registerDetails,
//        public landingDetails: landingDetails,
//        public indexDetails: indexDetails) { }
//
//}


import { profileDetails } from './profilepage.model';
import { registerDetails } from './registerpage.model';
import { landingDetails } from './landingpage.model';
import { IndexDetails } from './index.model';

export class root {
    constructor(
        public profileDetails: profileDetails,
        public registerDetails:registerDetails,
        public landingDetails: landingDetails,
        public indexDetails: IndexDetails) { }

}