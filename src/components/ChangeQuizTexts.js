import React, {useState} from 'react';

import questionsJSON from '../Texts/questions.json';
import alternativesJSON from '../Texts/alternatives.json';

export var contentArrayQuestion = questionsJSON.pcr;
export var contentArrayAlternatives = alternativesJSON.pcr;

export var itIsCorrect = false;
export function confirmAnswer(isTrue){
}

export function showAlternative(question, number){
    return(
        contentArrayAlternatives[question][number].alternative
    );
}
