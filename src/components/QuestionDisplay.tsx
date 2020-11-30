import { NavigateBefore } from '@material-ui/icons';
import React, {useEffect, useState} from 'react'
import data from '../data/data.json'
import {AllQuizzes, CurrentQuiz} from '../Interface/interface'
import QuizQuestion from './QuizQuestion'
import { useHistory } from 'react-router-dom'


function QuestionDisplay() {

    const [quiz, setQuiz] = useState<AllQuizzes>(data); 
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [currentData, setCurrentData] = useState<CurrentQuiz | undefined>(undefined);
    let history = useHistory();

    const handleCurrentSteps = () => {
        if (currentStep === 19){
            alert("Step Is "+ currentStep)
            history.push('/result')        
        }else{
        setCurrentStep(currentStep+1);
        }    
    }


    useEffect(()=> {
        setQuiz(data);
        quiz? setCurrentData(quiz[currentStep]): console.log("Data Not Found")
    },[data, handleCurrentSteps]);


    return(
        <div>
            <QuizQuestion
            currentData = {currentData}
            handleNext = {handleCurrentSteps}
            />
        </div>
    )
}


export default QuestionDisplay