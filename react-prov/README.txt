React-Prov web application
(@Author: Chris Ryan)

------------------------------------------------------------------------

.:: INTRODUCTION ::.

This web application . To run, all that is needed are
the following files, which are located in the /src/ directory:
  >index.html
  >bundle.min.js
  >styles.css

.:: BUILD DEPENDENCIES ::.

All build dependencies are listed in the ./package.json file. The files required
to build bundle.min.js and style.css are located within the /build/ directory.

To rebuild this application on Windows, install Node.js (with npm), launch PowerShell
within this file's directory. Run the command 'npm install' to install all the dependencies.
The commands 'npm run build' and 'npm run build-dev' will compile the css and js files.
However, bundle.min.js will by un-minified (for debugging). Run the command
'npm run build-pro' to compile AND minify the js files.

The npm config file also contains the following script commands to run the application
locally, with hot reloading, on webpack's dev server:
  >'npm run start-server' will start this application through webpack-dev-server
  >'npm run start' will start this application through webpack-dev-server AND launch
    http://localhost:8080 in the default browser.
