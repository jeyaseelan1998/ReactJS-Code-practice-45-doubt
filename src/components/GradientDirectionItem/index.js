import {Button, GradientDirectionItemContainer} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    gradientDirectionDetails,
    isActive,
    updateActiveGradientDirectionId,
  } = props
  const {directionId, displayText} = gradientDirectionDetails

  const onClickHandler = () => updateActiveGradientDirectionId(directionId)

  return (
    <GradientDirectionItemContainer>
      <Button type="button" isActive={isActive} onClick={onClickHandler}>
        {displayText}
      </Button>
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
