import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { General, ProjectDetails, ChildDetails, ChildDetailsItem2, ChildDetailsItem3, RunningTime } from '../Common/Selector';
import R from '../R';


/**
 * props:{
 *          goBack=()=>{}
 * }
 * state:{}
 */
class UnPlannedDowntime extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <General>

                <View style={{flex:1}} />

                <ProjectDetails title='Unplanned downtime' goBack={goBack}>

                    <ChildDetails />
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem2 label={`DR25 - \nBulk Quality Issue`} buttonName='DR25' isIcon />

                    </ChildDetails>
                    
                    <ChildDetails isBorderLeftWidth>

                        <ChildDetailsItem3 buttonName='Resolved' backgroundColor='#FCA800'>

                            <RunningTime />
                            <RunningTime isMarginLeft />

                            <Text style={{fontSize:60, color:'#58616A', paddingHorizontal:5}}>:</Text>

                            <RunningTime />
                            <RunningTime isMarginLeft />

                        </ChildDetailsItem3>

                    </ChildDetails>

                </ProjectDetails>

            </General>
        );
    }
}

export {UnPlannedDowntime}