import { useState } from "react"

export const useInput = () => {
const [titleValue, setTitleValue] = useState("")
const [passwordValue, setsetPasswordValue] = useState("")
const [validPassword, setValidPassword] = useState(false)
const [emailValue, setEmailValue] = useState("")
const [emailValid, setEmailValid] = useState(false)
const [dateValue, setDateValue] = useState()

console.log("TITLE VALUE:", titleValue);
console.log("validPassword", validPassword);
console.log("emailValid",  emailValid);
console.log("dateValue", dateValue);

const getTitleValue = (e) => {
 setTitleValue(e.target.value)
}

const getPasswordValue = (e) => {
 setsetPasswordValue(e.target.value)
 setValidPassword(passwordValue.trim().length > 4)
}

const getEmailValueValid = (e) => {
 setEmailValue(e.target.value)
 setEmailValid(emailValue.includes((" @ ")))
}
const getDateValue = (e) => {
 setDateValue(e.target.value)
}

 return{
  titleValue,
  getTitleValue,
  passwordValue,
  getPasswordValue,
  emailValue,
  getEmailValueValid,
  dateValue,
  getDateValue
 }
}