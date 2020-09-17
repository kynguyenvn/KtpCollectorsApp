import React, {Component} from 'react';
import {View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {TabBar} from '../Common/TabBar';
import {GoodUnitAndReject} from './GoodUnitAndReject';
import {UnPlannedDowntime} from '../UPT/UnPlannedDowntime';
import {PlannedDowntime} from '../PDT/PlannedDowntime';
import {Changeover} from '../Changeover/Changeover';
import {Footer} from '../Common/Footer';
import {AlertScreen} from '../Common/AlertScreen';

/**
 * mock data
 */
const shift = {
  start: 1598846400000,
  end: 1598889600000,
  shiftlyBuiltUnits: 3000,
  completeHours: [{builtUnits: 1000, hourStart: 1598857200000}],
};

/**
 * props:{}
 *
 * state:{}
 */
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().getTime(),
      minute: new Date().getMinutes(),
      tab: null,
    };
  }

  UNSAFE_componentWillMount() {
    this.startClockEvents();
  }


  componentWillUnmount() {
    clearTimeout(this.firstMinuteTimeout);
    clearInterval(this.minuteInterval);
    clearTimeout(this.gotoPage);
  }

  componentDidUpdate() {
    const {route} = this.props;
    const page = route.params ? route.params.page : null;
  }

  startClockEvents = () => {
    const secondInMillisecs = 1000;
    const minuteInSecs = 60;
    const minuteInMillisecs = minuteInSecs * secondInMillisecs;
    const currentTime = new Date();

    this.setState({currentTime: currentTime.getTime()});
    this.firstMinuteTimeout = setTimeout(() => {
      this.minutePassed();
      this.minuteInterval = setInterval(
        () => this.minutePassed(),
        minuteInMillisecs,
      );
    }, (minuteInSecs - currentTime.getSeconds()) * secondInMillisecs);
  };

  minutePassed = () => {
    let minuteMark = new Date().getMinutes();
    const currentTime = new Date().getTime();
    if (minuteMark === 59) {
      console.log('oneHourPass');
    }
    if(minuteMark === 0){minuteMark =+ 1}
    this.setState({ currentTime, minute: minuteMark})
  }


    /**
     *
     */
    goToDefault = () => { 
      this.tabView.goToPage(0);
    };


    /**
     *
     */
    handleChangeScreen = (event) => { 
      this.setState({tab: event.i})
    };

    
    /**
     *
     */
    handleTabChange= (i) => { 
     let tabBar = Boolean;
     switch (i) {
      case 0:
        tabBar = true;
        break;
      case 1:
        tabBar = false;
        break;
      case 2:
        tabBar = false;
        break;
      case 3:
        tabBar = false;
        break;
      case 4:
        tabBar = false;
        break;
      default: 
        tabBar = false;
        break;
    }
    return tabBar;
    };


    /**
     * 
     */
    render(){

        const {navigation} = this.props;
        const {minute, currentTime, tab} = this.state;
        const isActive = this.handleTabChange(tab);



        return(
            
            <View style={{flex:1}}>
            
                <ScrollableTabView
                    ref={(tabView) => {
                    if (tabView !== null) {
                    this.tabView = tabView
                    }
                    }}
                    tabBarPosition='top'
                    initialPage={0}
                    onChangeTab={this.handleChangeScreen}
                    locked
                    scrollWithoutAnimation
                    prerenderingSiblingsNumber={3}
                    renderTabBar={() => <TabBar />}
                >

                    <GoodUnitAndReject
                        tabLabel={'Default'.toUpperCase()}
                        navigation={navigation}
                        minuteMark={minute} shift={shift} currentTime={currentTime}
                        isActive={isActive}
                    />

                    <UnPlannedDowntime
                        tabLabel={'Unplanned D/T'.toUpperCase()}
                        navigation={navigation}
                        goBack={this.goToDefault}
                    />

                    <Changeover
                        tabLabel={'Changeover'.toUpperCase()}
                        navigation={navigation}
                        goBack={this.goToDefault}
                    />

                    <PlannedDowntime
                        tabLabel={'Planned D/T'.toUpperCase()}
                        navigation={navigation}
                        goBack={this.goToDefault}
                    />
                    
                    <AlertScreen
                        tabLabel={'Alert'.toUpperCase()}
                        navigation={navigation}
                    />

                </ScrollableTabView>

                <Footer />

            </View>

        );
  }
}
