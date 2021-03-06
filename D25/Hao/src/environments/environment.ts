// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'webbangame',
    appId: '1:194316627686:web:7165a5b7f6eb66e9531527',
    databaseURL: 'https://webbangame-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'webbangame.appspot.com',
    locationId: 'asia-southeast1',
    apiKey: 'AIzaSyBtELE5bGNfZ1bnXsiH1fDJXvH8rJ_SPAc',
    authDomain: 'webbangame.firebaseapp.com',
    messagingSenderId: '194316627686',
  },
  production: false,
  endpoint : 'http://127.0.0.1:3000/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
