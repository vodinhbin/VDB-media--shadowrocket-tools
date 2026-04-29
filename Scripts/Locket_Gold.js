var obj = JSON.parse($response.body);
obj.subscriber.subscriptions["gold"] = {
  "expires_date": "2099-12-31T00:00:00Z",
  "original_purchase_date": "2023-09-01T00:00:00Z",
  "purchase_date": "2023-09-01T00:00:00Z"
};
obj.subscriber.entitlements["gold"] = {
  "expires_date": "2099-12-31T00:00:00Z",
  "original_purchase_date": "2023-09-01T00:00:00Z",
  "purchase_date": "2023-09-01T00:00:00Z",
  "product_identifier": "locket_gold_yearly"
};
$done({body: JSON.stringify(obj)});
