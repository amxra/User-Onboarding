import React, {useState} from "react"

const initialForm = {
    name: ' ',
    email: ' ', 
    password: ' '
}

function Form (props) {
    const [form, setForm] = useState(initialForm);
}