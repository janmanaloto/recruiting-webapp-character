import { ATTRIBUTE_LIST, CLASS_LIST } from "../../../consts";
import { Attribute } from "../../attribute/components/Attribute";
import { Class } from "../../class/components/Class";
import { useAppContext } from "../state/app.context";

export function AppSection({ children }) {
  const { attributes, handleChange } = useAppContext();

  return (
    <section className="App-section">
      <div>
        {ATTRIBUTE_LIST.map((attribute) => (
          <Attribute
            key={attribute}
            attribute={attribute}
            onChange={handleChange}
          />
        ))}
      </div>
      <div>
        {Object.keys(CLASS_LIST).map((className) => (
          <Class
            key={className}
            className={className}
            attributes={attributes}
          />
        ))}
      </div>
    </section>
  );
}
