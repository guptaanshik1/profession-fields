export function excludeFields<Object, Field extends keyof Object>(
  obj: Object,
  fields: Field[]
): Omit<Object, Field> {
  for (let field of fields) {
    delete obj[field];
  }
  return obj;
}
