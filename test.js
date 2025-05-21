import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '1m',
  vus: 50,
  thresholds: {
    http_req_failed: ['rate<0.01'],       // Менше 1% помилок
    http_req_duration: ['p(95)<500'],     // 95% відповідей < 500 мс
  },
};

export default function () {
  http.get('https://quickpizza.grafana.com/');
  sleep(1);
}
