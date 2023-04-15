import React from 'react';
function Question({question, correct, incorrect}){
    const allAnswers=[...incorrect, correct];

    return(
        <div>
            <h2>{question}</h2>
            <ul>
                # this stuff is new
                {allAnswers.map((answer,index) => (
                    <li key = {index}>
                        <button> {answer}</button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Question;
