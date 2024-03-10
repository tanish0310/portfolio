function calculateGrade() {
    // get each value of input
    let physics = document.querySelector('#phy').value; 
    let chemistry = document.querySelector('#chem').value; 
    let math = document.querySelector('#math').value; 
    let biology = document.querySelector('#bio').value;
    let history = document.querySelector('#hist').value;
    let grades = ''; 
    
    // find total mark and convert string to integer
    let totalgrades = parseFloat(physics) + parseFloat(chemistry) + parseFloat(math) + parseFloat(biology) + parseFloat(history);

    // find percentage and condition for grades 
    let percentage = (totalgrades / 500) * 100; 
    if (percentage <= 100 && percentage >= 80) { 
        grades = 'A'; 
    } else if (percentage <= 79 && percentage >= 60) { 
        grades = 'B'; 
    } else if (percentage <= 59 && percentage >= 40) { 
        grades = 'C'; 
    } else { 
        grades = 'F';
    }
    
    // error message if any field is empty or total mark is greater than 500 
    if (physics == '' || chemistry == '' || math == '' || biology == '' || history == '') { 
        document.querySelector('#result').innerHTML = `Please fill out all the fields`;
    } else if (totalgrades > 500) {
        document.querySelector('#result').innerHTML = `${totalgrades} is greater than 500.`;
    } else {
        // pass/fail condition 
        if (percentage >= 39.5) { 
            document.querySelector('#result').innerHTML = `Your total is <b>${totalgrades}</b>, out of 500 and percentage is <b>${percentage}%</b>. <br> Your grade is <b>${grades}</b>. You are Pass.`; 
        } else { 
            document.querySelector('#result').innerHTML = `Your total is <b>${totalgrades}</b>, out of 500 and percentage is <b>${percentage}%</b>. <br> Your grade is <b>${grades}</b>. You are Fail.`; 
        } 
    } 
}; 
    