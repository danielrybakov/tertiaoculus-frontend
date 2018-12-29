import styled, { css } from 'styled-components'
import { fonts } from './fonts'
import { colors } from 'app/common/styles'

const textMixin = css`
    font-family: ${props => (props.font ? props.font : fonts.avalon)};
    color: ${props => (props.color ? props.color : colors.text)};
    text-align: ${props => (props.align ? props.align : 'left')};
`
const styleText = css`
    ${textMixin};
    font-size: 16px;
    line-height: 20px;
`
const styleSmallText = css`
    ${textMixin};
    font-size: 14px;
    line-height: 18px;
`
const styleCaptionText = css`
    ${textMixin};
    font-size: 12px;
    line-height: 18px;
`
const styleTinyText = css`
    ${textMixin};
    font-size: 10px;
    line-height: 12px;
`
const Text = styled.span`
    ${styleText};
`
const SmallText = styled.span`
    ${styleSmallText};
`
const CaptionText = styled.span`
    ${styleCaptionText};
`
const TinyText = styled.span`
    ${styleTinyText};
`

export {
    styleText,
    styleSmallText,
    styleCaptionText,
    styleTinyText,
    Text,
    SmallText,
    CaptionText,
    TinyText
}
