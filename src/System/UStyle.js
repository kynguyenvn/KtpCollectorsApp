import {Dimensions} from 'react-native';

export default class UStyle {

    static deviceWidth =  Dimensions.get('window').width;
    static deviceHeight = Dimensions.get('window').height;
    static shadow = {elevation: 5, shadowOffset: {width: 0, height: 4}, shadowRadius:16, shadowColor: '#000000', shadowOpacity: 0.15};
    static shadowIcon = {elevation: 2, shadowOffset: {width: 0, height: 2}, shadowRadius:2, shadowColor: '#000000', shadowOpacity: 0.15};
    static shadowButton = {elevation: 2, shadowOffset: {width: 0, height: 4}, shadowRadius:8, shadowColor: '#296C42', shadowOpacity: 0.2};
    static shadowModal = {elevation: 2, shadowOffset: {width: 0, height: 2}, shadowRadius:16, shadowColor: '#000000', shadowOpacity: 0.3};
    static shadowToast = {elevation: 2, shadowOffset: {width: 0, height: 4}, shadowRadius:22, shadowColor: '#2F373C', shadowOpacity: 0.25};
    static shadowTabBar = {elevation: 2, shadowOffset: {width: 0, height: 2}, shadowRadius:20, shadowColor: '#4B5361', shadowOpacity: 0.2};

    //FOR SCROLL VIEW
    static behaviorKeyboardAvoidingView = Platform.OS === 'ios' ?{behavior:"padding"}:{behavior:"padding"};

}   