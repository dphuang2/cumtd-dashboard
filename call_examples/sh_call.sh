key=abbadf0572d24a02949d9e4ff688e944

echo "DEPARTURE QUERY______________________________"
# Get Departure by Stop Query
curl "https://developer.cumtd.com/api/v2.2/json/GetDeparturesByStop?key=$key&stop_id=IT"
echo "\n"

echo "AUTOCOMPLETE QUERY______________________________"
# Autocomplete Query
curl https://www.cumtd.com/autocomplete/stops/v1.0/json/search?query=il
echo "\n"
