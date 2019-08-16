# Setup
 - `npm install`

# Run iOS
- `react-native run-ios`

# Modules Installed
- Redux - `npm install redux`
- React redux - `npm install react redux`
- [KeyMirror](https://www.npmjs.com/package/keymirror) - `npm install keymirror`
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - `npm install redux-thunk`

# Known issues
- Cannot connect to browser debugger -https://stackoverflow.com/questions/55131047/react-native-debugger-error-cannot-get-debugger-ui

- No Bundle URL Present
  - cd into /ios
  - Remove the build folder with rm -r build
  - Run react-native run-ios again


# Project Structure
/android - Native Android project <br>
/ios - Native iOS project <br> 
/core <br>
 &ensp; /actions <br>
 &ensp; /components <br>
 &ensp; /network <br>
 &ensp; /reducers <br>
 &ensp; /views <br>


# Redux Architecture
![](images/README_2019-08-15-14-21-28.png)