import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onFormSubmit }) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleHpChange = (event) => {
    setHp(event.target.value)
  }

  const handleFrontChange = (event) => {
    setFrontUrl(event.target.value)
  }

  const handleBackChange = (event) => {
    setBackUrl(event.target.value)
  }

  const newPoke = {
    name, 
    hp, 
    sprites: {front: frontUrl, back: backUrl}
  }
  
  const handleSubmit = (event) => {
    // cut this and bubble it to pokepage

    //we don't have object in pokepage
    event.preventDefault()
    onFormSubmit(newPoke)
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>

    

      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
