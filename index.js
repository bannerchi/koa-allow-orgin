module.exports = (env, writeList) => {
	return async(ctx, next) => {
		if(env === 'development') {
			ctx.set('Access-Control-Allow-Origin', '*');
			ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
			ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, __setXHR_, Authorization, authorization');
			ctx.set('Access-Control-Allow-Credentials', true);
			await next();
		} else {
			let origin = typeof ctx.headers.origin === 'undefined' ? null : ctx.headers.origin;
			if(origin === null) {
				await next();
			} else {
				if(writeList.indexOf(origin) !== -1) {
					ctx.set('Access-Control-Allow-Origin', origin);
					ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
					ctx.set('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, __setXHR_, Authorization, authorization');
					ctx.set('Access-Control-Allow-Credentials', true);
				}
				await next();
			}
		}
	}
}
