export default function Skill({ skill }) {
  const { attributeModifier } = skill;
  return (
    <div>
      {skill.name}: (Modifier: {attributeModifier})
    </div>
  );
}
