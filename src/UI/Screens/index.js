import { Navigation } from 'react-native-navigation';
import HomeFeed from './home';

export function registerScreens() {
    Navigation.registerComponent(`net.auzbuzzard.Derpibooru.HomeFeed`, () => HomeFeed);
}