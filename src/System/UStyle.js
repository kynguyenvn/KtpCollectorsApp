import {} from 'react-native';
import {Dimensions} from 'react-native';

export default class UStyle {

    static deviceWidth =  Dimensions.get('window').width;
    static deviceHeight = Dimensions.get('window').height;
    static shadow = {elevation: 5, shadowOffset: {width: 0, height: 4}, shadowRadius:16, shadowColor: '#000000', shadowOpacity: 0.15};
    static shadowIcon = {elevation: 2, shadowOffset: {width: 0, height: 2}, shadowRadius:2, shadowColor: '#000000', shadowOpacity: 0.15};
    static shadowButton = {elevation: 2, shadowOffset: {width: 0, height: 4}, shadowRadius:8, shadowColor: '#296C42', shadowOpacity: 0.2};
    static shadowModal = {elevation: 2, shadowOffset: {width: 0, height: 2}, shadowRadius:16, shadowColor: '#000000', shadowOpacity: 0.3};

}   