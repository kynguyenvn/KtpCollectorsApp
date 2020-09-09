import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Modal, RunningTime } from '../Common/Selector';
import { EverythingOkItem } from './EverythingOkElements';


// data test
const data = [
    {
        id: 1,
        type:'Unplanned D/T'
    },
    {
        id: 3,
        type:'Planned D/T'
    },
    {
        id: 2,
        type:'Changeover'
    },
    {
        id: 4,
        type:'Interruption (eg. Break, Query)'
    },
    {
        id: 5,
        type:'Taking Longer'
    },
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

            data,
            page: 0
        };
    }


    /**
     * 
     */
    goToPage = () => {
        this.props.navigation.navigate('main', {page: this.state.page})
    };


    /**
     * 
     */
    handlePageNumber = (id)=> {
        this.setState({page: id})
    };


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
                onPressModal={this.goToPage}
            >
                <View style={{flex:174, paddingHorizontal:30, paddingVertical:20}}>

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

                <View style={{flex:381, paddingHorizontal:30, paddingTop:20, borderTopWidth:1, borderTopColor:'#DBE2E8'}}>

                    <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24}}>Please select a reason and tap “Continue"</Text>

                    <ScrollView>
                        
                        <EverythingOkItem data={data} handleId={(id)=>this.handlePageNumber(id)} />
                    
                    </ScrollView>
                </View>

            </Modal>
        );
    }
}

export {EverythingOkScreen}