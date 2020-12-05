const calculadora = require('../src/calculadora')

// Aplicando a função de inserir as notas
describe('Teste de Notas', () => {
    test('Testando as Notas', () => {
        // De 9 – 10 SS – Superior
        expect(calculadora.media(9,9)).toBe("SS – Superior")
        // De 7 – 8,9 MS – Médio Superior
        expect(calculadora.media(8,8)).toBe("MS – Médio Superior")
        // De 5 – 6,9 MM – Médio
        expect(calculadora.media(5,5)).toBe("MM – Médio")
        // De 3 – 4,9 MI – Médio Inferior
        expect(calculadora.media(3,3)).toBe("MI – Médio Inferior")
        // De 0,1 – 2,9 II – Inferior
        expect(calculadora.media(0.1,0.2)).toBe("II – Inferior")
        // De 0,0 SR – Sem rendimento
        expect(calculadora.media(0,0)).toBe("SR – Sem rendimento")
        
    })
    
})