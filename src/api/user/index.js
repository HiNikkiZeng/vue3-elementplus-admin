import http from '@/utils/http';

const basePrefix = '/vme-admin/auth';
export function $apiLogin(data) {
  return http({
    url: `${basePrefix}`,
    method: 'post',
    data,
  });
}
export function $apiGetMenuByUser(data) {
  return http({
    url: `${basePrefix}/user`,
    method: 'post',
    data,
  });
}
