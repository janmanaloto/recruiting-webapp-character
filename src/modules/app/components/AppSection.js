import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "../../../consts";
import { Attribute } from "../../attribute/components/Attribute";
import { Class } from "../../class/components/Class";
import { useAppContext } from "../state/app.context";
import Skill from "../../skills/components/Skill";

export function AppSection({ children }) {
  const { handleChange } = useAppContext();

  return (
    <section className="App-section">
      <div>
        <h2>Attributes</h2>
        {ATTRIBUTE_LIST.map((attribute) => (
          <Attribute
            key={attribute}
            attribute={attribute}
            onChange={handleChange}
          />
        ))}
      </div>
      <div>
        <h2>Classes</h2>
        {Object.keys(CLASS_LIST).map((className) => (
          <Class key={className} className={className} />
        ))}
      </div>
      <div>
        <h2>Skills</h2>
        {SKILL_LIST.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
