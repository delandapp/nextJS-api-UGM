import { Button } from "@mantine/core";

export default function Buttons({ children, onClick }) {
  return (
    <div>
      <Button style={{ marginTop: "20px", marginBottom: "20px" }} onClick={onClick}>{children}</Button>
    </div>
  );
}
