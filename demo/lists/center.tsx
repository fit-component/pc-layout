import * as React from 'react'
import {Row, Col} from '../../src'

const DemoBox = React.createClass <any,any>({
    render() {
        let style = {
            height: this.props.value
        }
        return (
            <p style={style}>{this.props.children}</p>
        )
    }
})

export default class Demo extends React.Component<any, any> {
    render() {
        return (
            <div>
                <p>顶部对齐</p>
                <Row type="flex"
                     justify="center"
                     align="top">
                    <Col span="4"><DemoBox value={100}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={50}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={120}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={80}>.col-4</DemoBox></Col>
                </Row>

                <p>居中对齐</p>
                <Row type="flex"
                     justify="space-around"
                     align="middle">
                    <Col span="4"><DemoBox value={100}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={50}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={120}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={80}>.col-4</DemoBox></Col>
                </Row>

                <p>底部对齐</p>
                <Row type="flex"
                     justify="space-between"
                     align="bottom">
                    <Col span="4"><DemoBox value={100}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={50}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={120}>.col-4</DemoBox></Col>
                    <Col span="4"><DemoBox value={80}>.col-4</DemoBox></Col>
                </Row>
            </div>
        )
    }
}