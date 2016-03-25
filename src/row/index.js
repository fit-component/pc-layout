import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Row extends React.Component {
    render() {
        const { type, justify, align, className, ...others } = this.props
        const classes = classNames({
            '_namespace': true,
            'row': true,
            ['row-' + type]: type,
            ['row-' + type + '-' + justify]: justify,
            ['row-' + type + '-' + align]: align,
            [className]: className
        })
        return <div {...others} className={classes}>
            {this.props.children}
        </div>
    }
}

Row.defaultProps = {
    // @desc 类型
    type: ''
}