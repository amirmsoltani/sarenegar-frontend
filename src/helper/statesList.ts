import { TWheelPickerOption } from "@/common/Form/FormUtils.types";

type TStates = TWheelPickerOption[];

export const states: TStates = [
  { value: "thran", label: "تهران" },
  { value: "ardbyl", label: "اردبیل" },
  { value: "asfhan", label: "اصفهان" },
  { value: "albrz", label: "البرز" },
  { value: "aylam", label: "ایلام" },
  { value: "azrbayjanshrghy", label: "آذربایجان شرقی" },
  { value: "azrbayjanghrby", label: "آذربایجان غربی" },
  { value: "bvshhr", label: "بوشهر" },
  { value: "chharmhalvbkhtyary", label: "چهارمحال وبختیاری" },
  { value: "khrasanjnvby", label: "خراسان جنوبی" },
  { value: "khrasanrzvy", label: "خراسان رضوی" },
  { value: "khrasanshmaly", label: "خراسان شمالی" },
  { value: "khvzstan", label: "خوزستان" },
  { value: "znjan", label: "زنجان" },
  { value: "smnan", label: "سمنان" },
  { value: "systanvblvchstan", label: "سیستان وبلوچستان" },
  { value: "fars", label: "فارس" },
  { value: "ghzvyn", label: "قزوین" },
  { value: "ghm", label: "قم" },
  { value: "krdstan", label: "کردستان" },
  { value: "krman", label: "کرمان" },
  { value: "krmanshah", label: "کرمانشاه" },
  { value: "khgylvyhvbvyrahmd", label: "کهگیلویه وبویراحمد" },
  { value: "glstan", label: "گلستان" },
  { value: "gylan", label: "گیلان" },
  { value: "lrstan", label: "لرستان" },
  { value: "mazndran", label: "مازندران" },
  { value: "mrkzy", label: "مرکزی" },
  { value: "hrmzgan", label: "هرمزگان" },
  { value: "hmdan", label: "همدان" },
  { value: "yzd", label: "یزد" },
];

export const stateTranslator = (value: string | null) => states.find((state) => state.value === value) ?? null;
