import React, {Component} from 'react';
import {View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import moment from 'moment';
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
      idleStart: Date.now(),
      isActive: true,
      isEverythingOk: false,
    };
  }

  UNSAFE_componentWillMount() {
    this.startClockEvents();
  }

  componentDidMount() {
    this.wasActive = false;
    if (this.state.isActive) {
      this.wasActive = true;
      this.activated();
    }
  }
  componentWillUnmount() {
    this.disabled();
    clearTimeout(this.firstMinuteTimeout);
    clearInterval(this.minuteInterval);
  }

  componentDidUpdate() {
    if (this.state.isActive) {
      if (!this.wasActive) {
        this.wasActive = true;
        this.activated();
      }
    } else if (this.wasActive) {
      this.wasActive = false;
      this.disabled();
    }
  }

  activated = () => {
    if (!this.timer) {
      this.timer = setInterval(() => this.checkIdle(), 1000);
      this.setState({idleStart: Date.now()});
    }
  };

  disabled = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  checkIdle = () => {
    const startTime = moment(this.state.idleStart);
    const now = moment(Date.now());
    const diff = now.diff(startTime, 'seconds');
    const idleTimeout = 50;
    if (!this.state.isEverythingOk && diff > idleTimeout) {
      console.log('show everything ok');
      this.setState({isEverythingOk: true});
    }
  };

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
    goToDefault = () => { this.scrollableTabView.goToPage(0);};


    /**
     * 
     */
    render(){

        const {navigation, route} = this.props;
        const { minute, currentTime } = this.state;

        const page = route.params?route.params.page:0;

        return(
            
            <View style={{flex:1}}>
            
                <ScrollableTabView
                    ref={(ref) => { this.scrollableTabView = ref; }}
                    tabBarPosition='top'
                    initialPage={page}
                    locked
                    scrollWithoutAnimation
                    prerenderingSiblingsNumber={3}

                    renderTabBar={() => <TabBar />}
                >

                    <GoodUnitAndReject
                        tabLabel={'Default'.toUpperCase()}
                        navigation={navigation}
                        minuteMark={minute} shift={shift} currentTime={currentTime}
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
