<!-- @format -->

# Brightsquid Capstone

Registration and login system for Brightsquid Capstone.

Stack used: [MongoDB](www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# How to Run

_This is assuming that you've cloned the repository and that you have `npm` installed._

You will need to open 2 terminals for this. Starting with the backend, then following the frontend.

## Backend

### Steps

1. Select one of the terminals
2. Go into the `\server` folder of the repository
3. Install all packages required using `npm i`
4. Then run `npm run dev` for development server

## Frontend

### Steps

1. Select the other terminal
2. Install all packages required using `npm i`
3. Then run `npm start` and the frontend will get displayed

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

# Setup a [Python Virtual Environment](https://docs.python.org/3/tutorial/venv.html) for Testing

Create a virtual environment (venv) to avoid cluttering the computer with unncessary packages.

Run the following to create the venv:

`Bash`:

```bash
source [venv name]/Scripts/activate
```

To exit:

```bash
deactivate
```

### Package Management

Install your packages while in the venv.

To install the packages from a `requirements.txt` file:

```ps
python -m pip install -r requirements.txt
```

To save the packages in a `requirements.txt` file:

```ps
pip freeze > requirements.txt
```

## Unit Tests
### How To Run
1. Open a terminal\
2. Install Python bindings for Selenium:
`pip install selenium`
3. Open the project folder:
`cd brightsquid-capstone`
4. Go into the “tests” directory of the project folder
5. To run all tests on each page, run:
`python .\registration_tests.py`
6. (Optional) Run only tests for Welcome Page:
`python .\registration_tests.py WelcomePageTests`
7. (Optional) Run only tests for User Registration Page:
`python .\registration_tests.py RegistrationPageTests`
8. (Optional) Run only tests for Practice Details Page:
`python .\registration_tests.py PracticeDetailsPageTests`

**Note:** tests will run on Chrome. If you’re wanting to change the type of browser you wanted to run own (i.e. to Firefox), open registration_tests.py with a text editor, CTRL+F and search for webdriver.Chrome() and change it to webdriver.Firefox()

More information can be found here: https://selenium-python.readthedocs.io/installation.html
