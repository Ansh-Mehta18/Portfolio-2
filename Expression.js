import React from 'react'

export default function Expression() {
    let x=80;
    let y=40;
  return (
    <div>
    <h1>Evaluating Expression</h1>

    <h3>{x} {'>'} {y} {':'} {x>y ? 'True':'False'} </h3>
    </div>
    );
}
