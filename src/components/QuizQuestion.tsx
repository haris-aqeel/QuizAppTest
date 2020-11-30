import React, {useState, useEffect} from 'react'
import {Paper, Radio, RadioGroup, FormControlLabel, Button} from '@material-ui/core'
import Progress from '../Utils/Progress'
import {useDispatch} from 'react-redux'
import {increment} from '../app/controllerReducer'

function QuizQuestion({currentData, handleNext}: any) {

    const [category, setcategory] = useState<string>("");
    const [correct_answer, setcorrect_answer] = useState<string>("");
    const [difficulty, setdifficulty] = useState<string>("");
    const [incorrect_answers, setincorrect_answers] = useState<string[]>([]);
    const [question, setquestion] = useState<string>("");
    const [type, settype] = useState<string>(""); 
    const [options, setoptions] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const [count, setcount] = useState<number>(1);
    const dispatch = useDispatch();
  
    useEffect(()=> {
        if (currentData!==undefined){
            
            const {category, correct_answer, difficulty, incorrect_answers, question, type}  = currentData
            setcategory(decodeURIComponent(category));
            setcorrect_answer(correct_answer);
            setdifficulty(decodeURIComponent(difficulty));
            setincorrect_answers(incorrect_answers);
            settype(decodeURIComponent(type));
            setquestion(decodeURIComponent(question));
            setoptions([...incorrect_answers, correct_answer]);

        }

    }, [currentData]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setValue(event.target.value);

      };

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();
        if(correct_answer === value) {
            dispatch(increment())
           
        }
        setcount(count+1);
        handleNext();
       
    }
    
    return(
        <div>
            <Paper elevation = {3} style={{minWidth: "380px", height: "450px", margin: "0 auto", padding: "10px 10px"}}>

            <Progress progress={Math.floor((count/20) * 100)}/>

            <small style={{marginTop: "15px"}}>{category}</small>
            <h5>{difficulty.toUpperCase()}</h5>
            

                <form onSubmit = {handleFormSubmit}>

                <h3>{question}</h3>

                <RadioGroup aria-label="quizoptions" name="quizoptions" value={value} onChange={handleChange}>
                    {
                        options.map((currOption: string, index: number)=>  <FormControlLabel key={index} value={currOption} control={<Radio />} label={decodeURIComponent(currOption)} />)
                        
                    }
                </RadioGroup>              

                <Button variant="contained" color="secondary" type="submit">
                   Next
                </Button>

                </form>
 
            </Paper>
        </div>
    )

}


export default QuizQuestion;