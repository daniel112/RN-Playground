# SplashScreen
- This feature simulates a splash screen with a 5 second timer before navigating to the next view
- We register the **splashscreenView.js** in **/views.js** and set this view as initial root in **/index.js**

# View
- **splashscreenView.js**
  - Loads a bold text with a dynamic countdown before switching screens
  - Countdown is handled in *componentDidMount* because this is the final step of the component lifeCycle after *render*