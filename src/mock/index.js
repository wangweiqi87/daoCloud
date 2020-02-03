const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/userInfo', 'get', require('./json/userInfo'));
// 版权声明：本文为CSDN博主「不求甚解bc」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
//  原文链接：https://blog.csdn.net/bocongbo/article/details/81700843
