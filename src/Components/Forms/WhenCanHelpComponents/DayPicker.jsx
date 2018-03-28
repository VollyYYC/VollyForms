import * as React from 'react';
import TimeOfDay from './TimesOfDay';

export default class DayPicker extends React.Component {

    constructor(props){
        super(props);
        const DaysOfWeek = [];

        DaysOfWeek.push(new Day('Sunday'));
        DaysOfWeek.push(new Day('Monday'));
        DaysOfWeek.push(new Day('Tuesday'));
        DaysOfWeek.push(new Day('Wednesday'));
        DaysOfWeek.push(new Day('Thursday'));
        DaysOfWeek.push(new Day('Friday'));
        DaysOfWeek.push(new Day('Saturday'));
        this.state = {DaysOfWeek:DaysOfWeek}
    }

    handleSubmit = (e)=>{
        e.preventDefault();

    };

    handleClick = (e) =>{

    };

    render() {

        DaysProps = {
            onClick: this.handleClick
        };

        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.DaysOfWeek.map(c => {
                    return (
                        <Day onClick={this.handleClick}/>
                    )
                })}
                <TimeOfDay/>
            </form>

        )
    }
}

class Day extends React.Component{
    Name;
    Selected;

    constructor(props){
        super(props)
        this.Name = props.Name;
        this.Selected = false;

    }

    ToggleSelected = () => {
        this.Selected = !this.Selected;
    };

    SetStyle () {
        if (this.Selected){
            return {backgroundColor: 'green'}
        }else{
            return {backgroundColor: 'inherit'}
        }
    };

    render (){
        return (
            <React.Fragment onClick={this.props.onClick} style={this.SetStyle()} key={this.Name}>
                {this.Name}
            </React.Fragment>
        )
    }

}
