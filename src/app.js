import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.food = '';
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({food: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewFood(this.state.food);
    };

    render() {
        return (
        <>
           {
              this.props.food.map(food =>
                <li>{food}</li> )
           }

            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                value={this.state.category}
                onChange={this.handleChange}
                placeholder='Enter a Food'
                />
                <button type='submit'> Create a Food </button>
             </form>
        </>
        )
    }
}

// lets you read from the state
const mapStateToProps = (state) => {
    return {
        food: state.food,
    }
};

// lets you send actions to the store
const mapDispatchToProps = (dispatch) => {
    return {
        createNewFood : (foodName) => {
            dispatch({
                type: 'FOOD_CREATE',
                payload: foodName,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);