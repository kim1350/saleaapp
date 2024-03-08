import {type ParamListBase, type RouteProp} from '@react-navigation/native';
import {type StackNavigationProp} from '@react-navigation/stack';

export interface ScreenProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
}
