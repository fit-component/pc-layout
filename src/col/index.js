import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Col extends React.Component {
    render() {
        const {span, order, offset, push, pull, className, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            ['col-' + span]: span,
            ['col-order-' + order]: order,
            ['col-offset-' + offset]: offset,
            ['col-push-' + push]: push,
            ['col-pull-' + pull]: pull,
            [className]: className
        })
        return (
            <div {...others} className={classes}>
                {this.props.children}
            </div>
        )
    }
}