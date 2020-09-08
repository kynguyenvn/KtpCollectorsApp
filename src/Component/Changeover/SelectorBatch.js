import React, {Component} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import { Modal } from '../Common/Selector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SelectorBatchItem } from './ChangeoverElements';


// data test
const data = [
    {
        batchNumber:'345342',
        partNumber:'766856',
        description:'Vestibulum dictum tellus'
    },
    {
        batchNumber:'345342',
        partNumber:'345367',
        description:'Mauris nulla est, facilisis ut'
    },
    {
        batchNumber:'',
        partNumber:'845147',
        description:''
    },
    {
        batchNumber:'125414',
        partNumber:'564341',
        description:'Cras erat pharetra condimentum'
    },
    {
        batchNumber:'',
        partNumber:'998412',
        description:'Pharetra condimentum'
    },
    {
        batchNumber:'654123',
        partNumber:'345546',
        description:'Condimentum'
    },
]


/**
 * props:{}
 * state:{}
 */
class SelectorBatch extends Component {

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

            <Modal
                title='Please select Part / Batch Number'
                width={727}
                maxHeight={440}
                isButton
                goBack={()=>navigation.goBack()}
                isPaddingSelectorBatch
                style={{flex:1}}
            >
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:30}}>
                    
                    <Ionicons name='search-outline' style={{fontSize:24, color:'#00538B'}} />
                    
                    <TextInput  
                        placeholder='Enter number...'
                        placeholderTextColor='#3F4246'
                        style={{flex:1, fontSize:16, fontWeight:'300', opacity:0.65, paddingVertical:20, marginLeft:10, paddingRight:30}}
                    />
                
                </View>
                
                <View style={{flex:1, flexDirection:'column'}}>

                    <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#F3F5F7', borderTopWidth:1, borderBottomWidth:1, borderColor:'#DBE2E8'}}>

                        <View style={{flex:168}}>
                            <Text numberOfLines={1} style={{fontSize:16, color:'#3F4246', fontWeight:'600', marginVertical:20, paddingLeft:30}}>Batch Number</Text>
                        </View>
                        
                        <View style={{flex:238, borderLeftWidth:1, borderLeftColor:'#DBE2E8'}}>
                            <Text numberOfLines={1} style={{fontSize:16, color:'#3F4246', fontWeight:'600', marginVertical:20, paddingLeft:30}}>Part Number</Text>
                        </View>
                        
                        <View style={{flex:419, borderLeftWidth:1, borderLeftColor:'#DBE2E8'}}>
                            <Text numberOfLines={1} style={{fontSize:16, color:'#3F4246', fontWeight:'600', marginVertical:20, paddingLeft:30}}>Description</Text>
                        </View>

                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReachedThreshold={1}

                        // ListHeaderComponent={()=><View style={{height:1, backgroundColor:'#DBE2E8'}}/>}
                        ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'#DBE2E8'}}/>}
                        
                        onEndReached={this.loadMore}

                        renderItem={
                            ({ item, index }) => {
                                return <SelectorBatchItem {...item} />
                            }
                        }
                    />

                </View>

            </Modal>
        );
    }
}

export {SelectorBatch}