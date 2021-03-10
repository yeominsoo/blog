import React, {useState, useRef} from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('여민수');
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [okCnt, setOkCnt] = useState(0);
    const [missCnt, setMissCnt] = useState(0);
    
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setResult('딩동댕');
            setWord( value );
            setValue('');
            setOkCnt(okCnt + 1);
            setMissCnt(0);
            
            inputRef.current.focus();

        }else{
            setMissCnt(missCnt + 1);
            setResult('틀렸습니다');
            setValue('');
            setOkCnt(0);
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
            <label htmlFor="wordInput">글자를 입력하세요.&nbsp;</label>
            <input id="inp1" ref={inputRef} onChange={onChangeInput} value={value} />
            <button id="wordInput" className="wordInput">입력!</button>
            </form>
            <div id="okCnt">연속 정답 횟수 : {okCnt}</div>
            <div id="missCnt">연속 오답 횟수 : {missCnt}</div>
            <div id="result">{result}</div>
        </>
    )

}

export default WordRelay;