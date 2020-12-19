import * as handler from '../libs/handler-lib';

test('get', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
  };

  await handler.get(event, context, callback);
});
