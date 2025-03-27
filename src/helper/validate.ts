import { email_regex } from "./regex";
import { PhoneNumberUtil } from "google-libphonenumber";

type TRuleCallback = (value: any, form: any) => boolean | string;
type TRule = { message: string; rule: TRuleCallback };

const phoneUtil = PhoneNumberUtil.getInstance();

class Rules {
  protected rules: TRule[] = [];

  required = (message: string = "این فیلد اجباری می باشد") => {
    this.rules.push({ message, rule: (value: string | any[]) => (Array.isArray(value) ? !value.length : !value) });
    return this;
  };

  isPhoneNumber(message: string = "شماره همراه معتبر نمی باشد") {
    this.rules.push({
      message,
      rule: (value: string) => {
        try {
          const phone_number = phoneUtil.parseAndKeepRawInput(value, "IR");
          if (phone_number.getCountryCode() && phone_number.getNationalNumber()) {
            return !phoneUtil.isValidNumber(phone_number);
          } else return true;
        } catch (error) {
          return true;
        }
      },
    });
    return this;
  }

  isNumber = (message: string = "یک عدد معتبر وارد کنید") => {
    this.rules.push({ message, rule: (value: string) => isNaN(+value) });
    return this;
  };

  pattern = (value: RegExp | string, message: string = "Value does'nt match the pattern") => {
    const regex = new RegExp(value);
    this.rules.push({ message, rule: (value: string) => !value.match(regex) });
    return this;
  };

  email = (message: string = "ایمیل معتبر نمیباشد") => {
    return this.pattern(email_regex, message);
  };

  min = (min: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(+value >= min),
      message: message ?? `مقدار باید بزرگ تر از ${min} باشد`,
    });
    return this;
  };

  max = (max: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(+value <= max),
      message: message ?? `مقدار باید کوچک تر از ${max} باشد`,
    });
    return this;
  };

  minLength = (min: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(value.length >= min),
      message: message ?? `مقدار باید حداقل ${min} کاراکتر باشد`,
    });
    return this;
  };

  maxLength = (max: number, message?: string) => {
    this.rules.push({
      rule: (value: string) => !(value.length <= max),
      message: message ?? `مقدار باید حداکثر ${max} کاراکتر باشد`,
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
