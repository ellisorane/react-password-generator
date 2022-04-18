const Form = (props) => {
    return (
        <>
            <h1>React Password Generator</h1>
            <h4>Password Parameters</h4>
            <form onSubmit={ (e) => props.onSubmit(e) }>
                <label htmlFor="numOfChars">Number of characters</label><br></br> 
                <input type="number" id="numOfChars" name="numOfChars" min="8" max="20" onChange={ (e) => props.setNumOfChars(e.target.value) } value={ props.numOfChars } /><br></br>
                <input type="checkbox" id="numbers" name="numbers" checked={ props.number.bool } onChange={ () => props.setNumber({ ...props.number, bool: !props.number.bool }) } />
                <label htmlFor="numbers"> Numbers</label><br></br>
                <input type="checkbox" id="smallLetters" name="smallLetters" checked={ props.smLetters.bool } onChange={ () => props.setSmLetters({ ...props.smLetters, bool: !props.smLetters.bool }) } />
                <label htmlFor="smallLetters"> Small letters</label><br></br>
                <input type="checkbox" id="capitalLetters" name="capitalLetters" checked={ props.capsLetters.bool } onChange={ (e) => props.setCapsLetters({ ...props.capsLetters, bool: !props.capsLetters.bool }) } />
                <label htmlFor="capitalLetters"> Capital Letters</label><br></br>
                <input type="checkbox" id="specialChars" name="specialChars" checked={ props.specialChars.bool } onChange={ (e) => props.setSpecialChars({ ...props.specialChars, bool: !props.specialChars.bool }) } />
                <label htmlFor="specialChars"> Special Characters</label><br></br>
                <input type="submit" value="Generate Password"  />
            </form>
        </>
    );
}

export default Form;



