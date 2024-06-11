import { ComponenteC } from "./ComponenteC";

export const ComponenteA = ({ emoji, titulo }) => {
  return (
    <div className="container">
      <ComponenteC emoji={emoji} />
      <div>
        <p>{titulo}</p>
      </div>
    </div>
  );
};
