// src/App.js
import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
    state = {
        characters: [], // This array is now empty
    }
}

removeCharacter = (index) => {
    const {characters} = this.state;

    this.state({
        characters: characters.filter((character, i) => {
            return i !== index;
        }),
    })
}

render(); {
    const {characters} = this.state;

    return (
        <div className="container">
            <Table characterData={characters}
            remove character={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
            <input type="button" value="Submit" onClick={this.submitForm} />
        </div>
    )
}

handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
}

export default App;