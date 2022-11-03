const appRegistrations = ['collections', 'recipes', 'gifts', 'books'];

export const appRegistrationMap = new Map(
  appRegistrations.map((slug, index) => [slug, index]),
);
