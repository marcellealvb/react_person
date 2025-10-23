export const Person = ({ person }) => {
  const ageBlock =
    person.age != null ? (
      <p className="Person__age">{`I am ${person.age}`}</p>
    ) : null;

  let partnerLabel;

  if (!person.isMarried) {
    partnerLabel = 'I am not married';
  } else if (person.sex === 'm') {
    partnerLabel = `${person.partnerName} is my wife`;
  } else {
    partnerLabel = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {ageBlock}

      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
