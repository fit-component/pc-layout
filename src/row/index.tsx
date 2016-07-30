import * as React from 'react'
import * as classNames from 'classnames'
import * as modules from './module'
import TransmitTransparently from '../../../../common/transmit-transparently/src'
import './index.scss'

@TransmitTransparently()
export default class Row extends React.Component<modules.PropsDefine, modules.StateDefine> {
    static defaultProps = modules.defaultProps

    constructor(props: modules.PropsDefine) {
        super(props)
        this.state = modules.defaultState
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            'row': true,
            ['row-' + this.props.type]: !!this.props.type,
            ['row-' + this.props.type + '-' + this.props.justify]: !!this.props.justify,
            ['row-' + this.props.type + '-' + this.props.align]: !!this.props.align,
            [this.props['className']]: !!this.props['className']
        })
        return <div {...this.props.others} className={classes}>
            {this.props.children}
        </div>
    }
}