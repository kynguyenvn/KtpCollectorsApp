import React, {Component} from 'react';
import {View} from 'react-native';
import R from '../R';
import { TabBar } from '../Common/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { GoodUnitAndReject } from './GoodUnitAndReject';
import { UnPlannedDowntime } from '../UPT/UnPlannedDowntime';
import {PlannedDowntime} from '../PDT/PlannedDowntime';
import {Changeover} from '../Changeover/Changeover';


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
    render(){

        return(
            
            <View style={{flex:1}}>
            
                <ScrollableTabView
                    tabBarPosition='top'
                    initialPage={0}
                    locked
                    prerenderingSiblingsNumber={3}
                    renderTabBar={() => <TabBar />}
                >

                    <GoodUnitAndReject
                        tabLabel={''}
                    />

                    <UnPlannedDowntime
                        tabLabel={'Unplanned D/T'.toUpperCase()}
                    />

                    <Changeover
                        tabLabel={'Changeover'.toUpperCase()}
                    />

                    <PlannedDowntime
                        tabLabel={'Planned D/T'.toUpperCase()}
                    />

                </ScrollableTabView>

            </View>

        );
    }
}
