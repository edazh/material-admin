import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: '123456',
    name: '管理员',
  },
  {
    username: 'edazh',
    password: '123456',
    name: '开发者',
  },
]

Mock.mock('/api/user/login', 'post', ({ body }) => {
  const request = JSON.parse(body)

  const user = userDB.find(
    item =>
      item.username === request.username && item.password === request.password
  )
  if (user) {
    return {
      code: 200,
      message: '登录成功',
      data: {
        ...user,
        token: 'uhsuafhkuh484fdfdsadSFF65fds',
      },
    }
  } else {
    return {
      code: 401,
      message: 'user is undefined',
    }
  }
})
