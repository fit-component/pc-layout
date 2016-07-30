import * as React from 'react'
import * as classNames from 'classnames'
import * as modules from './module'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import './index.scss'

@TransmitTransparently()
export default class Col extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            ['col-' + this.props.span]: !!this.props.span,
            ['col-order-' + this.props.order]: !!this.props.order,
            ['col-offset-' + this.props.offset]: !!this.props.offset,
            ['col-push-' + this.props.push]: !!this.props.push,
            ['col-pull-' + this.props.pull]: !!this.props.pull,
            [this.props['className']]: !!this.props['className']
        })
        return (
            <div {...this.props.others} className={classes}>
                {this.props.children}
            </div>
        )
    }
}
