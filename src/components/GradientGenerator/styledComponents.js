import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to
      ${({gradientConfiguration}) =>
        gradientConfiguration
          ? gradientConfiguration.gradientDirection
          : 'top'},
    ${({gradientConfiguration}) =>
      gradientConfiguration ? gradientConfiguration.firstColor : '#8ae323'},
    ${({gradientConfiguration}) =>
      gradientConfiguration ? gradientConfiguration.secondColor : '#014f7b'}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 38px;
  font-weight: 600;
  text-align: center;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

export const GradientDirectionsList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const FormContainer = styled.form`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`

export const Input = styled.input`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  height: 45px;
  width: 85px;
  cursor: pointer;
`

export const Label = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 15px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: #1e293b;
  background-color: #00c9b7;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`
