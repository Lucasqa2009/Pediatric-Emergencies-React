import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';




var contentArray2 = ["Passo numero 1","Passo numero 2"];
var contentArray3 = ["Passo numero 1","Passo numero 2","Passo numero 3"];
export var contentArray = contentArray3

export function ChangeStepPCR(textIndex){
    return (
          contentArray[textIndex]
      );
}

export function ChangeTextArray(varArray) {
    switch (varArray) {
        case "pcr":
            
            break;
    
        default:
            break;
    }
}
