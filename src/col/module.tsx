export interface PropsDefine {
    /**
     * span
     */
    span?: string
    /**
     * order
     */
    order?: string
    /**
     * offset
     */
    offset?: string
    /**
     * push
     */
    push?: string
    /**
     * pull
     */
    pull?: string
    /**
     * 透传
     */
    others?: any

    [x:string]:any
}

export const defaultProps: PropsDefine = {}

export interface StateDefine {
}

export const defaultState: StateDefine = {}