import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'KoiShelf',
  webDir: 'www',
  plugins: {
  SplashScreen: {
    "launchShowDuration": 0,
    showSpinner: false,
    splashFullScreen: false,
    splashImmersive: false,
    androidScaleType: 'CENTER_CROP',
    backgroundColor: '#151F25'
  }
}
};

export default config;
