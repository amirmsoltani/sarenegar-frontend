import { email_regex } from "./regex";

type TDateObject = { date: string | Date | null; time: object | null };

type TRuleCallback = (value: any, form: any) => boolean | string;
type TRule = { message: string; rule: TRuleCallback };

class Rules {
  protected rules: TRule[] = [];

  required = (message: string = "This field is required") => {
    this.rules.push({ message, rule: (value: string | any[]) => (Array.isArray(value) ? !value.length : !value) });
    return this;
  };

  dateRequired(message: string = "This field is required") {
    this.rules.push({ message, rule: (value: TDateObject) => !(value.date && value.time) });
    return this;
  }

  pattern = (value: RegExp | string, message: string = "Value does'nt match the pattern") => {
    const regex = new RegExp(value);
    this.rules.push({ message, rule: (value: string) => !value.match(regex) });
    return this;
  };

  email = (message: string = "Email is not valid") => {
    return this.pattern(email_regex, message);
  };

  oneOf = (values: string[], message?: string) => {
    this.rules.push({
      rule: (value: string) => !values.includes(value),
      message: message ?? `It must be equal to one of these values: ${values.toString()}`,
    });
    return this;
  };

  notOneOf = (values: string[], message?: string) => {
    this.rules.push({
      rule: (value: string) => values.includes(value),
      message: message ?? `It must not be equal to these values: ${values.toString()}`,
    });
    return this;
  };

  min = (min: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(+value >= min),
      message: message ?? `Value must be bigger than ${min}`,
    });
    return this;
  };

  max = (max: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(+value <= max),
      message: message ?? `Value must be less than ${max}`,
    });
    return this;
  };

  minLength = (min: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(value.length >= min),
      message: message ?? `Value must be at least ${min} characters`,
    });
    return this;
  };

  maxLength = (max: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(value.length <= max),
      message: message ?? `Value must be at most ${max} characters`,
    });
    return this;
  };

  custom = (callback: TRuleCallback) => {
    this.rules.push({ message: "", rule: (...args) => callback(...args) });
    return this;
  };

  //  ? main function
  validate = (value: any, form: any) => {
    const result = this.rules.find(({ rule }) => rule(value, form));
    if (result) return result?.message || result.rule(value, form);
    else return true;
  };
}

export abstract class Validate {
  static gen() {
    return new Rules();
  }
}
