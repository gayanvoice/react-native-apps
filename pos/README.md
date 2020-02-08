# Building POS UI using React Native using Expo + TypeScript  
It is necessary to have some familiarity with TypeScript (It's just like JavaScript) or else at first sight React Native may seem like rocket science to an Android Native (Java or Kotlin) developer. It’s not. It keeps you quite close to the core JavaScript.

![enter image description here](https://raw.githubusercontent.com/gayanvoice/react-native-apps/master/images/pos.png)

So, if you are fluent enough with all core ReactJs and TypeScript concepts, you can easily create an app using React Native! The difference between native and hybrid apps is hybrid apps like apps using React Native uses a web view to render its components and functions.  
In this app, `Promise` is used [HomeScreen.tsx#L121](https://github.com/gayanvoice/react-native-apps/blob/master/pos/screens/HomeScreen.tsx#L121) to fetch data from the API. The [bill_data.json](https://github.com/gayanvoice/react-native-apps/blob/master/pos/bill_data.json), [orders_data.json](https://github.com/gayanvoice/react-native-apps/blob/master/pos/orders_data.json), and [user_data.json](https://github.com/gayanvoice/react-native-apps/blob/master/pos/user_data.json) contains JSON data. Until the data fetch from the server, progress bars are placed until the state is changed. The [React Navigation](https://reactnavigation.org/) is used for routing through the screens and components.  
## Prerequistes
Follow the instruction to install the following packages.
1. [git](https://git-scm.com/)
2. [Node.js + npm](https://nodejs.org/en/download/)
3. [expo-cli](https://facebook.github.io/react-native/docs/getting-started)

Fork the repository using the **Fork** Button in the GitHub repository page to change the content of the API. 
Fetch the repo using **git** by ````https://github.com/gayanvoice/react-native-apps```` 
Go to the repository and `cd react-native-apps/pos` and install the dependencies using `expo install` 
Start the app `expo start` 
