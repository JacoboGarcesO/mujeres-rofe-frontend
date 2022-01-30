export enum RolsEnum {
  admin = 'admin',
  user = 'user',
}

export const toRolEnum = (key: string): RolsEnum => {
  const options = new Map();
  options.set('admin', RolsEnum.admin);
  options.set('user', RolsEnum.user);

  return options.get(key?.toString().toLowerCase());
};

export const fromRolEnum = (key: RolsEnum): string => {
  const options = new Map();
  options.set(RolsEnum.admin, 'admin');
  options.set(RolsEnum.user, 'user');

  return options.get(key);
};
