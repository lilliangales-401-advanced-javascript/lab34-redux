import React from 'react';
import {connect} from 'react-redux';
const uuidv1 = require('uuid/v1');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({foodName: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let newFood = {name: this.state.foodName, id: uuidv1(), time: Date.now() }
        this.props.createNewFood(newFood);
    };

    handleDelete = (event) => {
        event.preventDefault();
        console.log(event.target.id)
        this.props.deleteFood(event.target.id);
    };kjuhy6

    handleUpdate = (event) => {
            event.preventDefault();
            this.props.updateFood(event.target.id, this.state.foodName);
    };


    render() {
        return (
        <>
           {
               this.props.food.map(food =>
                  <>
                  <li>{food.name}</li>
                  <button id={food.id} onClick={this.handleDelete} type='submit'> Delete </button>
                  <button id={food.id} onClick={this.handleUpdate} type='submit'> Update </button>
                  </>
               )

           }

            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
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
        createNewFood : (food) => {
            dispatch({
                type: 'FOOD_CREATE',
                payload: food,
            });
        },
        deleteFood : (foodid) => {
            dispatch({
                type: 'FOOD_DELETE',
                payload: foodid,
            });
        },

        updateFood : (foodid, newName) => {
            dispatch({
                type: 'FOOD_UPDATE',
                payload: {foodid: foodid, newName: newName},
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);