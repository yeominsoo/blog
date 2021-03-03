import React, {Component,createRef} from 'react';
import { render } from 'react-dom';
import Try from './try';

function getNumbers(){ //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i )), 1)[0];
        array.push(chosen);
    }
    return array;
}
class NumberBaseball_class extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.value !== nextProps.value){
            return true;
        }
        return false;
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, {try : this.state.value, result: "홈런!"}],
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.input.focus();
        }else{
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9){ //10회 이상 틀렸을때
                this.setState({
                    result: `10번 이상 실패! 이상 실패!, 답은 : ${this.state.answer.join(',')} 였습니다.`,
                });
                alert('게임을 다시 시작합니다.');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
                this.input.focus();
            }else{
                for(let i= 0; i < 4; i += 1){
                    if(answerArray[i] === this.state.answer[i]){
                        strike += 1;
                    }else if(this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    value: '',
                    tries: [...this.state.tries, {try : this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                });
                this.input.focus();
            }
        }
    };
        
    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    input;
    onInputRef = (c) => {
        this.input = c;
    }
    render(){
        return (
            <>
                <h1>{this.state.answer}</h1>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1} 차 시도 : `} tryInfo={v} />
                        );
                    })}
                </ul>
            </>
        );
    };
   
} 
export default NumberBaseball_class;