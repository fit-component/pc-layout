import React from 'react'
import { shallow, mount } from 'enzyme'
import { Row, Col } from 'fit-layout'

describe('fit-layout', ()=> {
    it('样式没想好怎么测', ()=> {
        const node = mount(
            <Row>
                <Col span="12">.col-12</Col>
                <Col span="12">.col-12</Col>
            </Row>
        )
        expect(true).to.equal(true)
    })
})
