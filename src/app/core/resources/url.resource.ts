import { environment } from 'src/environments/environment';

export const URL_RESOURCE = {
  userLogin: `${environment.apiUrl}/users/auth`,
  getStates: `${environment.apiUrl}/locations`,
  getCitiesByState: (stateId: string) => `${environment.apiUrl}/locations/${stateId}`,
  users: `${environment.apiUrl}/users`,
  paginatedUsers: (from: number) => `${environment.apiUrl}/users/paginated/${from}`,
  deleteUser: (userId: string) => `${environment.apiUrl}/users/${userId}`,
  notices: `${environment.apiUrl}/notices`,
  requests: `${environment.apiUrl}/requests`,
  forms: `${environment.apiUrl}/form`,
  noticeById: (noticeId: string) => `${environment.apiUrl}/notices/${noticeId}`,
  noticesByChannel: (channel: string) => `${environment.apiUrl}/notices/channel/${channel}`,
  deleteNotice: (noticeId: string) => `${environment.apiUrl}/notices/${noticeId}`,
  deleteRequest: (requestId: string) => `${environment.apiUrl}/requests/${requestId}`,
  userById: (userId: string) => `${environment.apiUrl}/users/${userId}`,
  slides: `${environment.apiUrl}/slides`,
  forgotPassword: `${environment.apiUrl}/users/forgot-password`,
};
