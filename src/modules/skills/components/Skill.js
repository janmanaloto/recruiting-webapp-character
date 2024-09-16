import { useAppContext } from "../../app/state/app.context";

export default function Skill({ skill }) {
  // const { attributes } = useAppContext();
  const { attributeModifier } = skill;
  return (
    <div>
      {skill.name}: (Modifier: {attributeModifier})
    </div>
  );
}
