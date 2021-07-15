 # Budget Tracker ![badmath](https://img.shields.io/badge/license-MIT-blue)

  ## About/Description

  This project is a budget tracker app.  As users will need to be able to add transactions no matter the their internet connection.  In order to meet this user need, this application is setup as a PWA so users can access this from their phone or computer.  Users can add an icon to their homescreen with this application as it acts similar to a native application. It also utilizes IndexDB to store transactions if the user is offline and adds those transactions when the user re-connects to the internet.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  This application is loaded to Heroku so no special actions are needed to run this application.  Users can open this application from their phone and add it with an icon to their screen with the Add to Home Screen from their phones.

  ## Usage

  ### Screenshots

  #### Homepage loaded with previous transactions saved

  <img width="1000" src="./imgs/budget_track_homepage.png" alt="homepage loaded with past data">

  #### Service Worker function on page load

  <img width="1000" src="./imgs/service_worker.png" alt="service worker registering and install, removing old data">

  #### Offline Transaction being submitted

  <img width="1000" src="./imgs/offline_transaction.png" alt="submitting a transaction while not connected">

  #### Transaction saved to IndexDB then to the DB after coming back online

  <img width="1000" src="./imgs/offline_saved.png" alt="offline transaction saved to indexDB">

  #### Refreshing the page after coming back online, shows the transaction was saved

  <img width="1000" src="./imgs/refreshed_saved_offline.png" alt="transaction was saved and displays when back on line">

  ## Languages

  JavaScript<br>HTML<br>CSS<br>IndexDB<br>Service Worker<br>Mongoose

  ## Contributing

  Contributions by: David Shaw

  If you would like to contribute to this project we follow the [Contributor Covenant](https://www.contributor-covenant.org/)

  ## License

  https://choosealicense.com/licenses/mit/

  ## Tests

  Opening Chrome DevTools will allow you to turn the application offline and test the IndexDB functionality.

  ## Questions:

  If you have any questions please contact us or refer to our github below:

  Email Us At: david.shaw1242@gmail.com

  Github Repo: https://github.com/ds1242/budget-tracker-pwa
