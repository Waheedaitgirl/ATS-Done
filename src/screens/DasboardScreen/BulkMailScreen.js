import React, { useEffect, useState } from 'react';
import {SafeAreaView,StatusBar, Text,View,StyleSheet,TouchableOpacity,useWindowDimensions } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { commonStyles,textStyles } from '../../styles';
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import { AppScreenWidth, hp, width } from '../../constants/sacling';
    const BulkMailScreen = ({navigation}) => {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:colors.dark_primary_color}} >
                <StatusBar barStyle={"light-content"} />
               <View style={commonStyles.container} >

               </View>
               
            </SafeAreaView>
            
        );
    };


export default BulkMailScreen;

