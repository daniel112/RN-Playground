import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const NormalButton = ({ style, backgroundColor, textColor, title, enable = true, onPress }) => {
  const {
    containerStyle,
    textStyle
  } = styles

  return (
    <TouchableOpacity
        style={[{
          opacity: enable ? 1 : 0.3,
          backgroundColor
        }, containerStyle, style]}
        disabled={!enable}
        onPress={onPress}
    >
      <Text style={[{ color: textColor }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export { NormalButton }