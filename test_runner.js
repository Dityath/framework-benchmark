import http from "k6/http";
import { check } from "k6";

const url = __ENV.URL || "http://localhost:5000/api/cek";
const expectedStatus = parseInt(__ENV.STATUS || "200");

export const options = {
  vus: parseInt(__ENV.VUS || "100"),
  duration: __ENV.DURATION || "10s",
};

export default function () {
  const res = http.get(url);
  check(res, {
    "status is expected": (r) => r.status === expectedStatus,
  });
}
