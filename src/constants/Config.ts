import {Platform} from 'react-native';

export default {
  DEEPAR: {
    API_KEY: Platform.select({
      android:
        '3af7e8277fff7a327e30dc461a4503b455eb62c732b8f47f5b05487113004c84c91c1ce3194c9137',
      ios: '7f361f894c9ff140c6d46a4eadfcd27321d2d236a1176e8e0696c6f2ce83b6a6a2923f063d7ab5b7',
    }),
  },
  TEST: {
    REMOTE_EFFECT_URL: 'http://betacoins.magix.net/public/deepar-filters/',
    EFFECTS: ['8bitHearts'],
  },
};
