// react-hook-form
import { useForm } from "react-hook-form";
// components
import { Input } from "@/common/Input/Input";
import { Form, FormButton } from "@/common/Form/Form";
import { Drawer, DrawerFooter } from "@/common/Drawer/Drawer";

type TDefaultValues = { value1: ""; value2: ""; value3: "" };
const defaultValues: TDefaultValues = { value1: "", value2: "", value3: "" };

export const EditModal = () => {
  const methods = useForm({ defaultValues });

  return (
    <Drawer title="MatchDetail">
      <Form {...methods}>
        <Input name="value1" label="value 1" />
        <Input name="value2" label="value 2" />
        <Input name="value3" label="value 3" />
        <DrawerFooter>
          <FormButton>submit</FormButton>
        </DrawerFooter>
      </Form>
    </Drawer>
  );
};
