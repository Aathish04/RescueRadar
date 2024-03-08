1. Location based SOS - get GPS Location - Identify nearest emergency location’s phone and call automatically on SOS
2. Comms should be reliable, I.e acknowledgement from Server to Client for every data transfer request
3. Early warning detection - ```curl 'https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails' \
  -X 'POST' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-GB,en-IN;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'DNT: 1' \
  -H 'Origin: https://sachet.ndma.gov.in' \
  -H 'Referer: https://sachet.ndma.gov.in/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"'```
4.P2P realtime distributed database for relief activity
5. Community Barter System