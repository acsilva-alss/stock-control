import Cpf from "../src/domain/entities/Cpf"

const invalidsCpf = [
  '',
  '123',
  '1234',
  '12345',
  'dsfsdgfg',
  '026.950410668',
]

const validsCpf = [
  '056.196.430-00',
  '42153370035',
  '835819460-92',
]

describe('Tests on cpf entity', () => {
  test.each(invalidsCpf)('Should return error if cpf is invalid', (newInvalidCpf) => {
    expect(() => new Cpf(newInvalidCpf)).toThrow(new Error('Invalid CPF'))
  })
  test.each(validsCpf)('Should create a cpf', (newValidCpf) => {
    const cpf = new Cpf(newValidCpf).value
    expect(cpf).toBe(newValidCpf)
  })
})