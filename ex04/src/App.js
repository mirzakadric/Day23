// src/App.js
import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
    state = {
        characters: [
            {
                firstName: 'Larry',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
            },
            {
                firstName: 'Alan',
                lastName: 'Turing',
            },
        ],
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
        </div>
    )
}

export default App;