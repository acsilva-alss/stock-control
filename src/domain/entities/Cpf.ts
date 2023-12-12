export class Cpf {
  private DIVIDER_SUM_DIGITS = 11
  private NUMBER_SUM_FIRST_DIGIT = 10
  private NUMBER_SUM_SECOND_DIGIT = 11
  readonly value: string

  constructor(newCpf: string){
    if(!this.isValid(newCpf)) throw new Error('Invalid CPF')
    this.value = newCpf
  }

  private isValid(cpfToBeValidated: string): boolean {
    if(!cpfToBeValidated) return false
    const cpfFormatted = this.cleanCpf(cpfToBeValidated)
    if(this.isInvalidLength(cpfFormatted)) return false 
    if(this.isIdenticalDigits(cpfFormatted)) return false    
    const firstCheckDigit = this.calculateCheckDigit(cpfFormatted, this.NUMBER_SUM_FIRST_DIGIT)
    const secondCheckDigit = this.calculateCheckDigit(cpfFormatted, this.NUMBER_SUM_SECOND_DIGIT)
    const checkDigits = cpfFormatted.slice(-2)
    const calculatedCheckDigitsResult = "" + firstCheckDigit + "" + secondCheckDigit 
    return checkDigits == calculatedCheckDigitsResult
  }

  private cleanCpf (cpfToBeValidated: string) {
    return cpfToBeValidated.replace(/\D/g, "")
  }

  private isInvalidLength (cpf: string) {
    return cpf.length !== 11
  }

  private isIdenticalDigits (cpf: string) {
      return [...cpf].every(c => c === cpf[0])
  }

  private calculateCheckDigit (cpf: string, factor: number) {
      const sumTotal = [...cpf].reduce((totalAccumulator, currentDigit) => {
          if(factor > 1) totalAccumulator += parseInt(currentDigit) * factor--
          return totalAccumulator
      }, 0)
      
      const quotient = (sumTotal % this.DIVIDER_SUM_DIGITS) 
      return quotient < 2 ? 0 : this.DIVIDER_SUM_DIGITS - quotient 
  }

}