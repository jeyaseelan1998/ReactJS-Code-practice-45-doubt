import {Component} from 'react'
import {
  AppContainer,
  Button,
  FormContainer,
  GradientDirectionsList,
  Heading,
  Input,
  InputContainer,
  InputGroup,
  Label,
  SubHeading,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientDenerator extends Component {
  state = {
    activeGradientDirectionId: gradientDirectionsList[0].directionId,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientConfiguration: null,
  }

  updateActiveGradientDirectionId = id => {
    this.setState({activeGradientDirectionId: id})
  }

  renderGradientDirectionsList = () => {
    const {activeGradientDirectionId} = this.state

    return (
      <GradientDirectionsList>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            key={eachItem.directionId}
            gradientDirectionDetails={eachItem}
            isActive={eachItem.directionId === activeGradientDirectionId}
            updateActiveGradientDirectionId={
              this.updateActiveGradientDirectionId
            }
          />
        ))}
      </GradientDirectionsList>
    )
  }

  onChangeInput = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  renderFirstColorInputField = () => {
    const {firstColor} = this.state

    return (
      <InputContainer>
        <Label>{firstColor}</Label>
        <Input
          type="color"
          value={firstColor}
          name="firstColor"
          onChange={this.onChangeInput}
        />
      </InputContainer>
    )
  }

  renderSecondColorInputField = () => {
    const {secondColor} = this.state

    return (
      <InputContainer>
        <Label>{secondColor}</Label>
        <Input
          type="color"
          value={secondColor}
          name="secondColor"
          onChange={this.onChangeInput}
        />
      </InputContainer>
    )
  }

  onSubmitHandler = event => {
    event.preventDefault()
    const {firstColor, secondColor, activeGradientDirectionId} = this.state
    const gradientDirection = activeGradientDirectionId.toLowerCase()

    this.setState({
      gradientConfiguration: {firstColor, secondColor, gradientDirection},
    })
  }

  render() {
    const {gradientConfiguration} = this.state
    return (
      <AppContainer
        gradientConfiguration={gradientConfiguration}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        {this.renderGradientDirectionsList()}

        <SubHeading>Pick the Colors</SubHeading>

        <FormContainer onSubmit={this.onSubmitHandler}>
          <InputGroup>
            {this.renderFirstColorInputField()}{' '}
            {this.renderSecondColorInputField()}
          </InputGroup>
          <Button type="submit">Generate</Button>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default GradientDenerator
