import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Modal, RunningTime } from '../Common/Selector';
import { EverythingOkItem } from './EverythingOkElements';


// data test
const data = [
    {type:'Unplanned D/T'},
    {type:'Planned D/T'},
    {type:'Changeover'},
    {type:'Interruption (eg. Break, Query)'},
    {type:'Taking Longer'},
]

/**
 * props:{
 *          navigation
 * }
 * state:{}
 */
class EverythingOkScreen extends Component {

    constructor(props){
        super(props);

        this.state = {

            data
        }
    }

    render(){

        const {data=[]} = this.state;

        const {navigation} = this.props;

        return(

            <Modal 
                title='Everything OK?' 
                isButton
                width={504}
                maxHeight={440}
                goBack={()=>navigation.goBack()}
                style={{flex:1}}
            >
                <View style={{flex:1, paddingHorizontal:30, paddingVertical:20}}>

                    <Text style={{fontSize:16, color:'#3F4246', fontWeight:'600', lineHeight:24, textAlign:'center'}}>Idle Time</Text>

                    <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>

                        <RunningTime />
                        <RunningTime isMarginLeft />

                        <Text style={{fontSize:30, color:'#58616A', marginHorizontal:7}}>:</Text>

                        <RunningTime />
                        <RunningTime isMarginLeft />

                        <Text style={{fontSize:30, color:'#58616A', marginHorizontal:7}}>:</Text>

                        <RunningTime />
                        <RunningTime isMarginLeft />

                    </View>

                </View>

                <View style={{flex:2, paddingHorizontal:30, paddingTop:20, borderTopWidth:1, borderTopColor:'#DBE2E8'}}>

                    <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24}}>Please select a reason and tap “Continue"</Text>

                    <ScrollView>
                        
                        <EverythingOkItem data={data} />
                    
                    </ScrollView>
                </View>

            </Modal>
        );
    }
}

export {EverythingOkScreen}