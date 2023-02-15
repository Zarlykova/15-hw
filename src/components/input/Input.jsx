import styled from 'styled-components'
import { useInput } from '../../hooks/useInput'


export const Inputs = () => {
 const {titleValue, getTitleValue, passwordValue, getPasswordValue, emailValue, getEmailValueValid, dateValue, getDateValue} = useInput(2)

  return (
    <StyledForm>
     <input
      type="text"
      placeholder='text'
      value={titleValue} 
      onChange={getTitleValue}
      />
     <input
      type="email"
      placeholder='email'
      value={emailValue}
      onChange={getEmailValueValid}
     />
      <input 
      type="password"
      placeholder='password'
      value={passwordValue} 
      onChange={getPasswordValue}
      />
     <input
      type="date"
      value={dateValue}
      onChange={getDateValue}
       />
    </StyledForm>
  )
}
const StyledForm = styled.form`
 display: flex;
 flex-direction: column;
 width: 400px;
 margin: 3rem auto;

 input{
   margin: 10px;
   padding: 8px;
   outline: none;
   border-radius: 6px;
   border: none;
 }
`