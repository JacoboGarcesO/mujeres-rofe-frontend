export enum TabEnum {
    users = 'users',
    notices = 'notices',
    slides = 'slides',
    channels = 'channels',
    forms = 'forms',
    requests = 'requests',
    highlightedCities = 'highlightedCities',
}
  
export const toTabEnum = (key: string): TabEnum => {
  const options = new Map();
  options.set('users', TabEnum.users);
  options.set('notices', TabEnum.notices);
  options.set('slides', TabEnum.slides);
  options.set('channels', TabEnum.channels);
  options.set('highlightedCities', TabEnum.highlightedCities);
    
  return options.get(key?.toString().toLowerCase());
};
  
export const fromTabEnum = (key: TabEnum): string => {
  const options = new Map();
  options.set(TabEnum.users, 'users');
  options.set(TabEnum.notices, 'notices');
  options.set(TabEnum.slides, 'slides');
  options.set(TabEnum.channels, 'channels');
  options.set(TabEnum.highlightedCities, 'highlightedCities');
  
  return options.get(key);
};
