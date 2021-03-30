// src/Table.js
import React, { Component } from "react";

// Add TableHeader arrow function here
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}

// Add TableBody arrow function here
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {characterData, removeCharacter} = props;

        return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    
}

export default Table;