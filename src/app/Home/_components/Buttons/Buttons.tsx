import { Button } from "@/common/Button/Button";

export const Buttons = () => {
  return (
    <div style={{ display: "flex", maxWidth: "500p", gap: "20px" }}>
      <Wrapper title="Green">
        <div>Size</div>
        <Button variant="green" size="sm">
          Submit
        </Button>
        <Button variant="green" size="md">
          Submit
        </Button>
        <Button variant="green" size="lg">
          Submit
        </Button>
        <div>Loading</div>
        <Button variant="green" size="sm" loading>
          Submit
        </Button>
        <Button variant="green" size="md" loading>
          Submit
        </Button>
        <Button variant="green" size="lg" loading>
          Submit
        </Button>
        <div>Disable</div>
        <Button variant="green" size="sm" disabled>
          Submit
        </Button>
        <Button variant="green" size="md" disabled>
          Submit
        </Button>
        <Button variant="green" size="lg" disabled>
          Submit
        </Button>
      </Wrapper>
      <Wrapper title="BlueStroke">
        <div>Size</div>
        <Button variant="blueStroke" size="sm">
          Submit
        </Button>
        <Button variant="blueStroke" size="md">
          Submit
        </Button>
        <Button variant="blueStroke" size="lg">
          Submit
        </Button>
        <div>Loading</div>
        <Button variant="blueStroke" size="sm" loading>
          Submit
        </Button>
        <Button variant="blueStroke" size="md" loading>
          Submit
        </Button>
        <Button variant="blueStroke" size="lg" loading>
          Submit
        </Button>
        <div>Disable</div>
        <Button variant="blueStroke" size="sm" disabled>
          Submit
        </Button>
        <Button variant="blueStroke" size="md" disabled>
          Submit
        </Button>
        <Button variant="blueStroke" size="lg" disabled>
          Submit
        </Button>
      </Wrapper>
      <Wrapper title="BlueFill">
        <div>Size</div>
        <Button variant="blueFill" size="sm">
          Submit
        </Button>
        <Button variant="blueFill" size="md">
          Submit
        </Button>
        <Button variant="blueFill" size="lg">
          Submit
        </Button>
        <div>Loading</div>
        <Button variant="blueFill" size="sm" loading>
          Submit
        </Button>
        <Button variant="blueFill" size="md" loading>
          Submit
        </Button>
        <Button variant="blueFill" size="lg" loading>
          Submit
        </Button>
        <div>Disable</div>
        <Button variant="blueFill" size="sm" disabled>
          Submit
        </Button>
        <Button variant="blueFill" size="md" disabled>
          Submit
        </Button>
        <Button variant="blueFill" size="lg" disabled>
          Submit
        </Button>
      </Wrapper>
      <Wrapper title="Red">
        <div>Size</div>
        <Button variant="red" size="sm">
          Submit
        </Button>
        <Button variant="red" size="md">
          Submit
        </Button>
        <Button variant="red" size="lg">
          Submit
        </Button>
        <div>Loading</div>
        <Button variant="red" size="sm" loading>
          Submit
        </Button>
        <Button variant="red" size="md" loading>
          Submit
        </Button>
        <Button variant="red" size="lg" loading>
          Submit
        </Button>
        <div>Disable</div>
        <Button variant="red" size="sm" disabled>
          Submit
        </Button>
        <Button variant="red" size="md" disabled>
          Submit
        </Button>
        <Button variant="red" size="lg" disabled>
          Submit
        </Button>
      </Wrapper>
    </div>
  );
};

const Wrapper = ({ title, children }: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
