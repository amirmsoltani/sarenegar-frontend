import { ReactNode, useCallback } from "react";
// helper
import { Validate } from "@/helper/validate";
// styles
import styles from "./FormContainer.module.scss";
// helper
import { timeListGenerator } from "@/helper/helper";
// react-hook-form
import { FieldValues, useForm } from "react-hook-form";
// components
import { Input } from "@/common/Input/Input";
import { Toggle } from "@/common/Toggle/Toggle";
import { Switch } from "@/common/Switch/Switch";
import { Uploader } from "@/common/Uploader/Uploader";
import { Form, FormButton } from "@/common/Form/Form";
import { Checkbox } from "@/common/Checkbox/Checkbox";
import { DropDown } from "@/common/DropDown/DropDown";
import { DatePicker } from "@/common/DatePicker/DatePicker";
import { PasswordInput } from "@/common/PasswordInput/PasswordInput";
// types
import { TDefaultDropDownOption, TDropDownHelper } from "@/common/DropDown/DropDown.types";
import { TMultiSelectDropDownPreview } from "@/common/DropDown/MultiSelectDropDown/MultiSelectDropDown.types";
import { TSingleDropDownOption, TSingleDropDownPreview } from "@/common/DropDown/SingleDropDown/SingleDropDown.types";

const DROP_DOWN_OPTIONS = [
  { value: "1 Value", label: "1 Label" },
  { value: "2 Value", label: "2 Label" },
  { value: "3 Value", label: "3 Label" },
  { value: "4 Value", label: "4 Label" },
  { value: "5 Value", label: "5 Label" },
  { value: "6 Value", label: "6 Label" },
  { value: "7 Value", label: "7 Label" },
];

const STATUS_OPTIONS = [
  { value: "PRIVATE", label: "Private" },
  { value: "PUBLIC", label: "Public" },
];

const timeList = timeListGenerator(9, 13, 30);
const maxDate = new Date(Date.now() + 1000 * 60 * 60 * 24);

type TDefaultValues = {
  email: "";
  ok: boolean;
  password: "";
  status: string;
  file: null | File;
  validate: boolean;
  multiSelectDropdown: object[];
  singleDropdown: null | object;
  multiSelectDropdownCustom: object[];
  singleDropdownCustom: null | object;
  start: { date: Date | ""; time: object };
};

const defaultValues: TDefaultValues = {
  email: "",
  ok: false,
  file: null,
  password: "",
  validate: true,
  status: "PRIVATE",
  singleDropdown: { value: "1 Value", label: "1 Label" },
  singleDropdownCustom: { value: "2 Value", label: "1 Label" },
  multiSelectDropdownCustom: [
    { value: "3 Value", label: "3 Label" },
    { value: "4 Value", label: "4 Label" },
  ],
  multiSelectDropdown: [
    { value: "1 Value", label: "1 Label" },
    { value: "2 Value", label: "2 Label" },
  ],
  start: { date: "", time: { value: "13:00", label: "13:00" } },
};

export const FormContainer = () => {
  const methods = useForm({ defaultValues });

  const submitHandler = useCallback(async (data: TDefaultValues) => {
    console.log(data);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 5000);
    });
  }, []);

  return (
    <Form {...methods} className={styles.form} onSubmit={submitHandler}>
      <Input name="email" label="Email" placeholder="Enter Username" validate={Validate.gen().required()} />
      <PasswordInput name="password" label="Password" placeholder="Enter Username" />
      <Switch name="ok" label="Bookable Online" />
      <Uploader
        name="file"
        label="test"
        types={["IMAGE"]}
        validate={Validate.gen().required()}
        title="Drag and Drop your Logo Image"
        description="PNG, JPG, JPEG files and Maximum size be 3MB and 1080*1080 px"
      />
      <Toggle name="status" label="Status" options={STATUS_OPTIONS} />
      <Checkbox name="validate" label="Validate" />
      <DatePicker name="start" label="test" maxDate={maxDate} timeList={timeList} validate={Validate.gen().dateRequired()} />
      <DropDown.Single name="singleDropdown" label="Single dropdown" options={DROP_DOWN_OPTIONS} />
      <DropDown.Single
        name="singleDropdownCustom"
        customOption={CustomOption}
        options={DROP_DOWN_OPTIONS}
        CustomHeader={CustomHeader}
        label="Single dropdown Custom"
        customPreview={CustomSinglePreview}
      />
      <DropDown.MultiSelect name="multiSelectDropdown" options={DROP_DOWN_OPTIONS} label="Multi Select dropdown" />
      <DropDown.MultiSelect
        customOption={CustomOption}
        options={DROP_DOWN_OPTIONS}
        CustomHeader={CustomHeader}
        name="multiSelectDropdownCustom"
        label="Multi Select dropdown Custom"
        customPreview={CustomMultiSelectPreview}
      />
      <FormButton>Submit</FormButton>
    </Form>
  );
};

const CustomOption = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  option,
  onChange,
  labelKey,
  isSelected,
}: TSingleDropDownOption<T, Y>) => {
  return (
    <div
      style={{ padding: "12px", background: isSelected ? "var(--main-blue-10)" : "transparent" }}
      onClick={() => onChange(option)}
    >
      Custom {option[labelKey] as ReactNode}
    </div>
  );
};

const CustomSinglePreview = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  value,
  valueKey,
}: TSingleDropDownPreview<T, Y>) => {
  return <div>{value?.[valueKey] as ReactNode}</div>;
};

const CustomMultiSelectPreview = <T extends FieldValues, Y extends object = TDefaultDropDownOption>({
  value,
  valueKey,
}: TMultiSelectDropDownPreview<T, Y>) => {
  const selectedValues = value.map((item) => item[valueKey]).join(" ,");
  return <div className={styles.preview}>{selectedValues}</div>;
};

const CustomHeader: TDropDownHelper = ({ closeHandler }) => {
  return <div onClick={closeHandler}>click to close</div>;
};
