import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  BackgroundContainer,
  Heading,
  DirectionList,
  DirectionText,
  ColorText,
  ColorContainer,
  GradientColorText,
  Input,
  Gradient,
  GradientButton,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeColor: gradientDirectionsList[0].value,
    activeBackground: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onFirstColorChange = event => {
    this.setState({firstColor: event.target.value})
  }

  onSecondColorChange = event => {
    this.setState({secondColor: event.target.value})
  }

  clickGradient = value => {
    this.setState({activeColor: value})
  }

  generateNewGradient = () => {
    const {activeColor, firstColor, secondColor} = this.state
    this.setState({
      activeBackground: `to ${activeColor},${firstColor},${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, activeColor, activeBackground} = this.state
    return (
      <BackgroundContainer
        activeBackground={activeBackground}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a Css Color Gradient</Heading>
        <DirectionText>Choose Direction</DirectionText>
        <DirectionList>
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              item={item}
              key={item.directionId}
              activeId={item.value === activeColor}
              clickGradient={this.clickGradient}
            />
          ))}
        </DirectionList>
        <ColorText>Pick the Colors</ColorText>
        <ColorContainer>
          <Gradient>
            <GradientColorText>{firstColor}</GradientColorText>
            <Input
              type="color"
              value={firstColor}
              onChange={this.onFirstColorChange}
            />
          </Gradient>
          <Gradient>
            <GradientColorText>{secondColor}</GradientColorText>
            <Input
              type="color"
              value={secondColor}
              onChange={this.onSecondColorChange}
            />
          </Gradient>
        </ColorContainer>
        <GenerateButton>
          <GradientButton type="button" onClick={this.generateNewGradient}>
            Generate
          </GradientButton>
        </GenerateButton>
      </BackgroundContainer>
    )
  }
}

export default GradientGenerator
