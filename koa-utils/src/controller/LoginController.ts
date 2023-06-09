import { Context } from 'koa'
import { getResponseData } from '../interface'
import { CONTROLLER, GET, POST } from '../decorator'
@CONTROLLER()
class LoginController {
	// 此处设计成静态防范，方便类没有调用的是时候也能直接 判断。
	static isLogin(ctx: Context): boolean {
		const isLogin = !!(ctx.session ? ctx.session.login : false)
		return isLogin
	}
	@GET('/')
	async home (ctx: Context) {
		const isLogin = LoginController.isLogin(ctx)
		if (isLogin) {
			ctx.body = `
				<html>
					<body>
						<a href='/getData'>爬取内容</a>
						<a href='/showData'>展示内容</a>
						<a href='/logout'>退出</a>
					</body>
				</html>
			`
		} else {
			ctx.body = `
				<html>
					<body>
						<form method="post" action="/login">
							账号随意，密码123。
							<br/ >
							账号：<input type="text" name="name" />
							<br/ >
							密码：<input type="password" name="password" />
							<button>登陆</button>
						</form>
					</body>
				</html>
			`
		}
	}

	@POST('/login')
	login(ctx: Context) {
		const isLogin = ctx.session && ctx.session.login
		const { name, password } = ctx.request.body as any

		if (isLogin) {
			ctx.body = getResponseData(false, '已经登陆过')
		} else {
			if (ctx.session) {
				if (password === '123') {
					ctx.session.login = true
					ctx.session.userInfo = { name: name, password: password }
					ctx.body = getResponseData(true)
				} else {
					ctx.body = getResponseData(false, '密码错误！')
				}
			} else {
				ctx.body = getResponseData(false, '登陆失败')
			}
		}
	}

	@GET('/logout')
	logout(ctx: Context) {
		if (ctx.session) {
			ctx.session.userInfo = {}
			ctx.session.login = false
		}
		ctx.body = getResponseData(true)
	}

	@POST('/user-info')
	'user-info' (ctx: Context) {
		const isLogin = ctx.session && ctx.session.login
		const { name, password } = ctx.request.body as any

		const userInfo = {
			id: '11',
			username: name,
			email: '2711430287@qq.com',
			sex: 'male'
		}
		ctx.body = getResponseData(userInfo)
	}
}

export {
	LoginController
}
