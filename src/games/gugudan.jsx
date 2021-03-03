import React, {useState, useRef} from 'react';

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);


    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        setResult('정답입니다! [답 : ' + value + ']');
        inputRef.current.focus();
        }else{
        setValue('');
        setResult('땡!');
        inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
        <div>{first} 곱하기 {second} 는 ?</div>
        <form onSubmit={onSubmitForm}>
            <input ref={inputRef} onChange={onChangeInput} value={value} />
            <button> 입력! </button>
        </form>
        <div id="result">{result}</div>
        </>
    );
}

export default GuGuDan;