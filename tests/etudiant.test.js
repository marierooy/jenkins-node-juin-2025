const request = require('supertest');
const app = require('../app');

describe('Tests des routes /etudiant/:id', () => {
    test.each([
        ['/etudiant/1', { id: 1, name: "Alain", age: 22 }],
        ['/etudiant/2', { id: 2, name: "Céline", age: 40 }]
    ])('GET %s retourne un objet avec id, name et age', async (url, expected) => {
        const res = await request(app).get(url);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('age');
        expect(res.body).toMatchObject(expected);
    });
});