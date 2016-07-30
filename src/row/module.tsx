export interface PropsDefine {
    /**
     * 宽度百分比, 1 - 24 24是100%
     */
        type?: string
    /**
     * justify
     */
    justify?: string
    /**
     * align
     */
    align?: string
    /**
     * 透传组件
     */
    others?: any

    [x: string]: any
}

export const defaultProps: PropsDefine = {
    type: '',
    justify: '',
    align: ''
}

export interface StateDefine {
}

export const defaultState: StateDefine = {}