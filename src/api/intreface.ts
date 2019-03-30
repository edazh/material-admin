// 请求接口数据
export interface Response<T = any> {
    /**
     * 状态码
     * @type { number }
     */
    code: number;

    /**
     * 数据
     * @type { T }
     */
    result: T;

    /**
     * 消息
     * @type { string }
     */
    message: string;
}
