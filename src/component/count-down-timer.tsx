import { Component } from "react"

interface CountDownTimerState {
    currentTime : number;
}

export class CountDownTimer extends Component<{},CountDownTimerState> {
    
    state = {
        currentTime: 10
    };
    
    handleStart= () => {
        setInterval(()=> {
            this.setState({
                currentTime : this.state.currentTime -1
            })
        }
        ,1000)
    }
    render() {
        
        return (
            <div>
                <h3>Countdown timer</h3>
                <div>
                    <button onClick={this.handleStart}>Start</button>
                    <button>Stop</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}