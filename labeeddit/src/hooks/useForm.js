import {useState} from "react"

const Useform = (initialState) =>{
    const [form, setForm] = useState(initialState)

    const handleInputChange = (event) =>{
        const {value, name} = event.target
        setForm({...form,[name]:value})
       
    }
    const clear = () =>{
        setForm(initialState)
    }
    console.log(form)
    return [form, handleInputChange, clear]
}

export default Useform;