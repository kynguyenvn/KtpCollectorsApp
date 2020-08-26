import React, {Component} from 'react';
import {View} from 'react-native';
import R from '../R';
import { TabBar } from '../Common/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { GoodUnitAndReject } from './GoodUnitAndReject';
import { UnPlannedDowntime } from '../UPT/UnPlannedDowntime';
import {PlannedDowntime} from '../PDT/PlannedDowntime';
import {Changeover} from '../Changeover/Changeover';
import { Footer } from '../Common/Footer';
import { AlertScreen } from '../Common/AlertScreen';


/**
 * props:{}
 * 
 * state:{}
 */
export default class MainScreen extends Component {

    constructor(props){
        super(props);
    }


    /**
     *
     */
    goToDefault = () => { this.scrollableTabView.goToPage(0);};


    /**
     * 
     */
    render(){

        return(
            
            <View style={{flex:1}}>
            
                <ScrollableTabView
                    ref={(ref) => { this.scrollableTabView = ref; }}
                    tabBarPosition='top'
                    initialPage={0}
                    locked
                    prerenderingSiblingsNumber={3}

                    renderTabBar={() => <TabBar />}
                >

                    <GoodUnitAndReject
                        tabLabel={'Default'.toUpperCase()}
                    />

                    <UnPlannedDowntime
                        tabLabel={'Unplanned D/T'.toUpperCase()}
                        goBack={this.goToDefault}
                    />

                    <Changeover
                        tabLabel={'Changeover'.toUpperCase()}
                        goBack={this.goToDefault}
                    />

                    <PlannedDowntime
                        tabLabel={'Planned D/T'.toUpperCase()}
                        goBack={this.goToDefault}
                    />
                    
                    <AlertScreen
                        tabLabel={'Alert'.toUpperCase()}
                    />

                </ScrollableTabView>

                <Footer />

            </View>

        );
    }
}
