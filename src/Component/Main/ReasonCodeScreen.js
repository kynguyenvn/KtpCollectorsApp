import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import R from '../R';
import { Modal } from '../Common/Selector';
import { ReasonCodeItem } from './MainElements';

// data test Reason Code
const data = [
    {
        type:'SC01',
        name:'Bottles'
    },
    {
        type:'SC02',
        name:'Bulk Waste'
    },
    {
        type:'SC03',
        name:'Caps'
    },
    {
        type:'SC04',
        name:'Mauris posuere'
    },
    {
        type:'SC05',
        name:'Praesent in ultrices'
    },
]

/**
 * props:{
 *          navigation
 * }
 * state:{
 *          data //data test
 * }
 */
class ReasonCodeScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            
            data
        };
    }


    render(){

        const {navigation} = this.props;

        const {data=[]} = this.state;

        return(

            <Modal title='Choose reason code' goBack={()=>navigation.goBack()}>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={1}

                    ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'#CAD3DB'}}/>}
                    onEndReached={this.loadMore}

                    renderItem={
                        ({ item, index }) => {
                            return <ReasonCodeItem {...item} />
                        }
                    }
                />

            </Modal>
        
        );
    }
}


export {ReasonCodeScreen}