<h1 align='center'>RN APP</h1>

<h2 align='center'>This Project is to learn react-native framework</h2>


[React-Native](https://reactnative.dev)
 - Version ~> "0.68.1"

## Running
    
- Pre running (Android | IOS)
 - run `npm install`
- IOS:
 - run `npx pod-install && react-native run-ios`
- Android
 - run `react-native run-android`

## Folder structure

````plainText
app
.
├─___.bundle__      
├─___tests___       # Global setup tests
├─ android          # Native android files
├─ ios              # Native ios files
├─ src              # Source files application
│   ├─ @types       # Contains all global definitions of types and interfaces
│   ├─ assets       # Contains Js bundles assets, e.g: icons, images etc..
│   ├─ components   # Contains all global react components
│   ├─ constants    # Constants files
│   ├─ context      # All contexts
│   ├─ hooks        # Costumized hooks
│   ├─ navigation   
│   ├─ screen       
│   ├─ services     # Contains external and api services
│   ├─ App          # Aplication entry
.
.
├─ index            # Bundle entry
.
.
├─ README.md

