import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import R from '../R';

/**
 * props:{}
 */
const CGeneral = (props) => {

    return  <View style={{flex: 1, flexDirection:'column', backgroundColor:'#FFF', paddingHorizontal:50, paddingBottom:30}}>
        {props.children}
    </View>
};


/**
 * @param props
 * @param title
 */
const CDetails = (props) => {

    const {goBack=()=>{}, title=''} = props;

    return <View style={{flex:2, backgroundColor:'#F3F5F7', borderWidth:1, borderColor:'#CAD3DB', borderRadius:3}}>

        <View style={{flex:123, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            
            <Text style={{flex:1, fontSize:30, color:'#3F4246', fontWeight:'600', lineHeight:40, textAlign:'center', marginLeft:71}}>{title.toUpperCase()}</Text>
            
            <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', marginRight:30, borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>
                
                <Text>X</Text>
            
            </TouchableOpacity>

        </View>

        <View style={{flex:364, flexDirection:'row'}}>
            {props.children}
        </View>

    </View>
};

/**
 * @param props 
 * @param style 
 */
const CSmallBox = (props) => {

    const {isBorderLeftWidth=false, style} = props;

    return <View style={{flex:1, justifyContent:'space-between', borderTopWidth:1, borderLeftWidth:isBorderLeftWidth?1:null, borderColor:'#CAD3DB', padding:30, ...style}}>
        {props.children}
    </View>
};


/**
 * @param onPressButton2 
 * @param label 
 * @param buttonName 
 * @param backgroundColor 
 * @param isIcon 
 */
const CSmallBoxItem2 = ({onPressButton2=()=>{}, label='', buttonName='', backgroundColor='#FA6348', isIcon=false}) => {

    return <>

        <Text style={{fontSize:26, color:'#3F4246', fontWeight:'300', lineHeight:40, textAlign:'center', marginTop:30}}>{label}</Text>

        <CButton2 
            onPressButton2={onPressButton2}
            buttonName={buttonName}
            backgroundColor={backgroundColor}
            isIcon={isIcon}
        />

    </>
};


/**
 * @param onPressButton2 
 * @param buttonName 
 * @param backgroundColor 
 * @param isIcon 
 * @param number 
 * @param isMarginLeft 
 */
const CSmallBoxItem3 = ({onPressButton2=()=>{}, buttonName='', backgroundColor='#FA6348', isIcon=false, number}) => {

    const CTiming = ({isMarginLeft=false}) => {
        
        return <View style={{flex:1, justifyContent:'center', height:80, backgroundColor:'#FFF', marginLeft:isMarginLeft?3:null, borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>
            
            <Text style={{fontSize:60, color:'#58616A', fontWeight:'300', lineHeight:80, textAlign:'center'}}>{number||0}</Text>
        
        </View>};

    return <>

        <View style={{flexDirection:'row', marginTop:25}}>

            <CTiming />
            <CTiming isMarginLeft />

            <Text style={{fontSize:60, color:'#58616A', paddingHorizontal:5}}>:</Text>

            <CTiming />
            <CTiming isMarginLeft />

        </View>

        <CButton2 
            onPressButton2={onPressButton2}
            buttonName={buttonName}
            backgroundColor={backgroundColor}
            isIcon={isIcon}
        />

    </>
};


/**
 * @param onPressButton2 
 * @param buttonName 
 * @param backgroundColor 
 * @param isIcon
 */
const CButton2 = ({onPressButton2=()=>{}, buttonName='', backgroundColor='#FA6348', isIcon=false}) => {

    return <TouchableOpacity activeOpacity={0.8} onPress={onPressButton2} style={{flexDirection:'row', height:48, backgroundColor:backgroundColor, justifyContent:isIcon?'space-between':'center', alignItems:'center', paddingHorizontal:26, borderRadius:35, ...R.Style.shadowButton}}>

        <Text style={{flex:1, fontSize:16, color:'#FFF', fontWeight:'700', lineHeight:30, textAlign:'center'}}>{buttonName}</Text>

        {isIcon?<View style={{width:10, height:10, backgroundColor:'#FFF'}} />:null}

    </TouchableOpacity>
};


/**
 * @param buttonName
 * @param onPressLogin
 */
const CButton = ({buttonName='', onPress=()=>{}, marginTop=30, color='#FFF', backgroundColor='#00538B', borderColor='#00538B', style}) => {

    return <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={onPress} 
                style={{
                    height:48, 
                    backgroundColor:backgroundColor, 
                    marginTop:marginTop, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderWidth:2, 
                    borderColor:borderColor, 
                    borderRadius:25, ...style
                }}
            >

        <Text style={{fontSize:16, color:color, fontWeight:'600'}}>{buttonName.toUpperCase()}</Text>

    </TouchableOpacity>
};


export {
    CButton,
    CButton2,
    
    CGeneral,
    CDetails,
    
    CSmallBox,

    CSmallBoxItem2,
    CSmallBoxItem3
}