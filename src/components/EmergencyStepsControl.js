import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {subVariable}  from '../screens/SubCategoria/changeSubs'




var contentArray2 = ["Passo numero 1","Passo numero 2"];
var contentArray3 = ["Passo numero 1","Passo numero 2","Passo numero 3"];
var contentArray4 = ["Passo numero 1","Passo numero 2","Passo numero 1212121"];
export var contentArray = contentArray3

export function ChangeStepPCR(textIndex){
    return (
          contentArray[textIndex]
      );
}

export function ChangeTextArray() {
    return(
        subVariable === "pcrLac" ? contentArray = contentArray2
        : subVariable === "pcrCrianca" ? contentArray = contentArray3 
        : contentArray = contentArray4
    );
}

