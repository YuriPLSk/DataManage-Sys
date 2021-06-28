import mock from 'mockjs'

export default {
    
    getHomeData:() => {
        return{
            code:20000,
            data:{
                videoData:mock.mock({
                    "array":[
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                            "education|1":["本科","硕士","博士"], //性别是数组中的一个，随机的
                            salary:15000,
                            record:"    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ut deserunt ipsam ab id, dolore officia, nisi, aut nihil fugiat numquam eius tempora obcaecati? Ratione magni adipisci rem quas sed."
                            
                        }, 
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                        {
                            name: mock.mock('@cname'),
                            username:mock.mock('@last()'),
                            jobno:mock.mock({
                                "number|100000-999999": 100000
                              }).number,
                            "age|18-28":25, //年龄为18-28之间的随机数字
                            email:mock.mock('@email'),
                            address: mock.mock('@city(true)'),
                            "sex|1":["男","女"], //性别是数组中的一个，随机的
                        },
                    ]
                }),
                tableData:mock.mock({
                    "array|6": [
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                        {
                            date: mock.mock('@date("yyyy-MM-dd")'),
                            name: mock.mock('@cname'),
                            address: mock.mock('@city(true)')
                        },
                    ]
                }),
                orderData:[
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                    {
                        '今日订单成交量':parseInt(Math.random() * 10000),
                        '今日支付总额':parseInt(Math.random() * 10000),
                        '今日支付均额':parseInt(Math.random() * 1000),
                        '昨日订单成交量':parseInt(Math.random() * 10000),
                        '昨日支付总额':parseInt(Math.random() * 10000),
                        '昨日支付均额':parseInt(Math.random() * 1000)
                    },
                ],
                newPerson:[
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                    {
                        '新增活跃用户':parseInt(Math.random() * 10000),
                        '转化活跃用户':parseInt(Math.random() * 10000)
                    },
                ],
                userAddress:[
                    {
                        name:'上海',
                        value:parseInt(Math.random() * 1000)
                    },
                    {
                        name:'北京',
                        value:parseInt(Math.random() * 1000)
                    },
                    {
                        name:'杭州',
                        value:parseInt(Math.random() * 1000)
                    },
                    {
                        name:'深圳',
                        value:parseInt(Math.random() * 1000)
                    },
                    {
                        name:'广州',
                        value:parseInt(Math.random() * 1000)
                    },
                    {
                        name:'苏州',
                        value:parseInt(Math.random() * 1000)
                    },
                ]
            }
        }
    }
}