Open Terminal in macOS/Linux (in windows - cmd)

In base folder run: npm i or yarn install etc. ... (depends on which package manager user uses).

To run development server run: npm start / yarn start etc. ... (depends on which package manager user uses).

If you want to create production build, run: npm run build / yarn run build etc. ... (depends on which package manager user uses).

** NOTE! If there is no external server to run production build, you need to add third party library to run this project's production build, such as "serve". ** To install "serve" run: npm install --global serve ** To run production build: serve -s "your build folder"

** NOTE! "serve" cab be installed only by "npm" command.