// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-image: linear-gradient(${props => props.activeBackground});
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`

export const DirectionText = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
`

export const DirectionList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 40px;
`

export const ColorText = styled.p`
  color: #ffffff;
  font-size: 16px;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 10px;
`

export const GradientColorText = styled.p`
  color: #ededed;
  font-size: 15px;
`

export const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`
export const Gradient = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const GenerateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

export const GradientButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`
