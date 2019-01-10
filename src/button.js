import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.TouchableOpacity`
  width: 300px;
  height: 40px;
  background-color: black;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  font-weight: bold;
  color: white;
`

const Button = ({ label }) => (
  <StyledButton>
    <StyledText>
      {label}
    </StyledText>
  </StyledButton>
)

export { Button }
