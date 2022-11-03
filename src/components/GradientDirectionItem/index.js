// Write your code here
import {Component} from 'react'
import {DirectionItem, Button} from './styledComponents'

class GradientDirectionItem extends Component {
  render() {
    const {activeId} = this.props

    const {item, clickGradient} = this.props
    const {displayText, value} = item

    const changeGradient = () => {
      clickGradient(value)
    }
    return (
      <DirectionItem>
        <Button type="button" activeId={activeId} onClick={changeGradient}>
          {displayText}
        </Button>
      </DirectionItem>
    )
  }
}

export default GradientDirectionItem
