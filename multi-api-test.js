import http from 'k6/http';
import { check } from 'k6';
 
export const options = {
  vus: 100,
  duration: '10s',
};
 
export default function () {
  const res = http.get('http://localhost:5000/api/cek');
 
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
