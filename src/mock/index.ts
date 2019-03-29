import Mock from 'mockjs'

Mock.mock('/api/user/login')

const ranBool = Mock.Random.boolean()

console.log('ranBool',ranBool);
