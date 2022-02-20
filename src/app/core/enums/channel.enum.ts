export enum ChannelEnum {
  home = 'home',
  network = 'network',
  business = 'business',
  opportunities = 'opportunities',
  contact = 'contact',
  training = 'training',
  admin = 'admin'
}

export const toChannelEnum = (key: string): ChannelEnum => {
  const options = new Map();
  options.set('home', ChannelEnum.home);
  options.set('network', ChannelEnum.network);
  options.set('business', ChannelEnum.business);
  options.set('opportunities', ChannelEnum.opportunities);
  options.set('contact', ChannelEnum.contact);
  options.set('training', ChannelEnum.training);
  options.set('admin', ChannelEnum.admin);

  return options.get(key?.toString().toLowerCase());
};

export const fromChannelEnum = (key: ChannelEnum): string => {
  const options = new Map();
  options.set(ChannelEnum.home, 'home');
  options.set(ChannelEnum.network, 'network');
  options.set(ChannelEnum.business, 'business');
  options.set(ChannelEnum.opportunities, 'opportunities');
  options.set(ChannelEnum.contact, 'contact');
  options.set(ChannelEnum.training, 'training');
  options.set(ChannelEnum.admin, 'admin');

  return options.get(key);
};
