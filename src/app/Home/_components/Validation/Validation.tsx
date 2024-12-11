import { useForm } from "react-hook-form";
import { Validate } from "@/helper/validate";
import { Input } from "@/common/Input/Input";
import { Form, FormButton } from "@/common/Form/Form";

export const Validation = () => {
  const methods = useForm({ defaultValues: { test: "" } });

  return (
    <div style={{ minWidth: "500px", padding: "36px" }}>
      <Form {...methods} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Input
          name="test"
          label="Validator test"
          validate={Validate.gen()
            .required()
            .minLength(20)
            .maxLength(30)
            .custom(() => "This is a custom error")}
        />
        <FormButton>submit</FormButton>
      </Form>
    </div>
  );
};
