import { environment } from 'src/environments/environment';

export const URL_RESOURCE = {
  userLogin: `${environment.apiUrl}/users/auth`,
  getStates: `${environment.apiUrl}/locations`,
  getCitiesByState: (stateId: string) =>`${environment.apiUrl}/locations/${stateId}`,
  users: `${environment.apiUrl}/users`,
  deleteUser: (userId: string) =>`${environment.apiUrl}/users/${userId}`,
  notices: `${environment.apiUrl}/notices`,
  deleteNotice: (noticeId: string) =>`${environment.apiUrl}/notices/${noticeId}`,
};
