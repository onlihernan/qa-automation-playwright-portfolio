const { test, expect, request } = require('@playwright/test');

test.describe('Posts API', () => {
  let apiContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com'
    });
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('GET /posts - should return 100 posts', async () => {
    const response = await apiContext.get('/posts');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveLength(100);
  });

  test('GET /posts/1 - should return correct post', async () => {
    const response = await apiContext.get('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBeTruthy();
    expect(body.body).toBeTruthy();
    expect(body.userId).toBeTruthy();
  });

  test('POST /posts - should create a new post', async () => {
    const response = await apiContext.post('/posts', {
      data: {
        title: 'QA Automation Test',
        body: 'This post was created by an automated test',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.id).toBeTruthy();
    expect(body.title).toBe('QA Automation Test');
  });

  test('GET /posts/999 - should return 404 for non-existent post', async () => {
    const response = await apiContext.get('/posts/999');

    expect(response.status()).toBe(404);
  });

  test('PUT /posts/1 - should update a post', async () => {
    const response = await apiContext.put('/posts/1', {
      data: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.title).toBe('Updated Title');
  });

  test('PATCH /posts/1 - should partially update a post', async () => {
    const response = await apiContext.patch('/posts/1', {
      data: {
        title: 'Patched Title'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.title).toBe('Patched Title');
  });

  test('DELETE /posts/1 - should delete a post', async () => {
    const response = await apiContext.delete('/posts/1');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toEqual({});
  });
});