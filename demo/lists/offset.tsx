import * as React from 'react'
import {Row, Col} from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Row>
                    <Col span="8">.col-8</Col>
                    <Col span="8"
                         offset="8">.col-8</Col>
                </Row>
                <Row>
                    <Col span="6"
                         offset="6">.col-6 .col-offset-6</Col>
                    <Col span="6"
                         offset="6">.col-6 .col-offset-6</Col>
                </Row>
                <Row>
                    <Col span="12"
                         offset="6">.col-12 .col-offset-6</Col>
                </Row>
            </div>
        )
    }
}