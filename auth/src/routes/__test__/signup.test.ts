import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'password',
		})
		.expect(201);
});

it('returns a 400 with an invalid email', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'asdasdasd',
			password: 'password',
		})
		.expect(400);
});

it('returns a 400 with an invalid password', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: '1',
		})
		.expect(400);
});

it('returns a 400 with missing email and pass', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test',
		})
		.expect(400);
	return request(app)
		.post('/api/users/signup')
		.send({
			password: 'asdjasjdad',
		})
		.expect(400);
});

it('disallows duplicate emails', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'asdasdasdasd',
		})
		.expect(201);
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'asdasdasdasd',
		})
		.expect(400);
});

it('sets a cookie after success signup', async () => {
	const response = await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'asdasdasdasd',
		})
		.expect(201);
	expect(response.get('Set-Cookie')).toBeDefined();
});
