##  React JS boiler plate with normal PHP app

### How to use this boiler plate

* In apache create a vhost pointing to `php` folder as root. Choose a domain (lets say `example.com`) 
* For other web servers use similar approach and point web server document root to `php` folder
* Install `yarn`
* In repository root folder (not webroot) execute `yarn build`
* In your browser open `react.php` (lets say `http://example.com/react.php`
* It should display react page.

### How I created this app

* create app using create react app
  * https://github.com/facebookincubator/create-react-app
* eject media
  * `yarn run eject` (cannot be reversed)
  * Allows you more control of bundling etc
* remove service worker 
  * remove plugin from `config/webpack.config.prod.js`
  * remove reference from `src/index.js`
  * remove contents from `src/registerServiceWorker.js`
  * because it is automatically bundled and has trigger on document load
  * It is used for offline resources but won't work because node server is suppose to send data which we are not using
* remove hash from bundled js and css
  * remove `.[hash:8]` from css and js inside `config/webpack.config.prod.js`
  * in dev version it does not use hash as it is uses a "virtual" file served by nodejs/express
  * you will need to provide your own cache busting and cache headers
  *  can make modifications in dev config as well but not really required
* symlink resource
  * symlink `public` and `build/static` folder
  * refer them in your html
* html page required
  * need root element
  * link to bundle js (`static/js/main.js`) (all react is js)
  * link to bundle css `static/css/main.css`) 
    * in dev mode style tag is dynamically generated and injected in document (may be for easy hot-reloading). 
    * But production config uses `ExtractTextPlugin` with fallback to `style-loader` so unlike dev html static html needs link tag to html

### How did I use redux

    npm i redux --save
    npm i react-redux --save
    cd src && mkdir actions components reducers && touch store.js
* Above bundling example was taken from:
    * `http://www.penta-code.com/how-to-add-redux-to-create-react-app/`
    * As it modified `create-react-app`
* Used app logic example from official docs 
  * url: `http://redux.js.org/docs/introduction/Examples.html`
  * sample: https://codesandbox.io/s/github/reactjs/redux/tree/master/examples/counter
  * but modified to fit into default create react app
  * key difference is to make component of Store `src/components/Store.js` and make it part of global App.
  
