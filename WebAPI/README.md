
# react-native-web-api

## Getting started

`$ npm install react-native-web-api --save`

### Mostly automatic installation

`$ react-native link react-native-web-api`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-web-api` and add `SLWebApi.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libSLWebApi.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import sl.lib.webapi.SLWebApiPackage;` to the imports at the top of the file
  - Add `new SLWebApiPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-web-api'
  	project(':react-native-web-api').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-web-api/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-web-api')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `SLWebApi.sln` in `node_modules/react-native-web-api/windows/SLWebApi.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using sl.lib.webapi.SLWebApi;` to the usings at the top of the file
  - Add `new SLWebApiPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import SLWebApi from 'react-native-web-api';

// TODO: What to do with the module?
SLWebApi;
```
  