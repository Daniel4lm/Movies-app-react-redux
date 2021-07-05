### Movies Finder App

#### Description

![image](https://user-images.githubusercontent.com/1280747/124474538-f03d7f00-dda0-11eb-87f6-d685d880caa2.png)

![image](https://user-images.githubusercontent.com/1280747/124474357-b7050f00-dda0-11eb-9f27-96bf11899631.png)

![image](https://user-images.githubusercontent.com/1280747/124474836-4f02f880-dda1-11eb-97b4-4572378eb8a9.png)

![image](https://user-images.githubusercontent.com/1280747/124474902-6346f580-dda1-11eb-9f72-2aeb3bec5beb.png)


Example project of the consumption of an TMDB movies API, using React.js, TypeScript, Redux, redux thunk. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Dependencies

 - Node.js environment 14+
 - npm package manager/yarn manager 1.22+
 - React 17+
 - React redux 7.x+

### For development

    1. npm install
    2. npm start


### Available running scripts

    In the project directory, you can run:

  - ``` yarn start ``` or
  - ``` npm run start ```

    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### For testing

  - ### Unit testing with React Testing Library(RTL) and Jest

    By default, all tests monitored by Jest are located inside `__tests__` directory:

      ``` <root_dir>/src/__tests___ ```
    
    Jest testing framework will automaticaly recongize any file with `.spec.js/ts` or `.test.js/ts`. 

    Now, we can run tests by following commands:

      ``` npm run test 
          /* OR */
          npm test 
      ```
    
    Jest tests can be called fired in watch mode, which watches for file changes and runs tests accordingly.

      ``` npm test -- --watch or yarn test --watch ```
    
    If we want to display individual test results with the test suite hierarchy(with names in *describe*, *it* and *test* blocks):

      ``` yarn test --verbose or npm test -- --verbose ```


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
