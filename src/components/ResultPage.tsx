import React, {useState} from 'react'
import {Paper} from '@material-ui/core'
import {useSelector} from 'react-redux'

function ResultPage() {

    const [ObtMarks, setObtMarks] = useState<number>(0);
    const num = +(useSelector(state => state))

    return(

        <Paper elevation={3} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" ,width: "400px", margin: "0 auto"}}>

            <h1>You Scored {num} from 20</h1>
            <h4>You Got {num/ 20 * 100} %</h4>

        </Paper>

    );

}

export default ResultPage;