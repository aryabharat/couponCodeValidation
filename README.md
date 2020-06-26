# Coupon Code Validation

## Stack Used
- Nodejs
- Express
- Mongo

## How to Install

This code uses MongoDB as database, so to connect your DB check the `.env_sample` file and update the **MONGO_URI** acordingly.

After the DB configuration follow these steps:

- `git clone`

Inside the folder:

- `npm insatll`
- `node server.js` 

## How Use

- Make a post request at 

`POST https://<You_local_host_with_port>/couponCode/validate`

With data as:
```
Content-Type: application/json
{
    "coupon":"BJLABIZ00",
    "amount":1999
}
```
**coupon** is the coupon code.
**amount** is the amount of cart on which the coupon is used.

If the coupon is valid then you will get response as the discount amount on the amount:
```
{
  "discount": 239.88
}
```
## Invalidation / Errors

| Errors      | Description |
| ----------- | ----------- |
| Invalid Coupon      | coupon code is wrong / not registered        |
| coupon expired   | The valid date of coupon is over        |
| Not aplicable on this amount   | The cart amount is less for the coupon to be applied        |


## Live Demo
```
POST https://rocky-spire-54542.herokuapp.com/couponCode/validate

Content-Type: application/json

{
    "coupon":"BJLABI2",
    "amount":1999
}
```
### Sample Coupon codes

| Coupon code |
| ----------- |
| `"coupon": "APLMBIZ11","type": "PERCENTAGE","expDate":"2020-06-29","minAmount": 1000,"percentageOff": 12,"percentageMaxAmount":500` | 
| `"coupon": "ZOKIBIZ11","type": "PERCENTAGE","expDate":"2020-06-22","minAmount": 1000,"percentageOff": 50,"percentageMaxAmount":500` |
|  `"coupon": "GSAGBIZ33","type": "FLAT","expDate":"2020-06-22","minAmount": 1000,"amountOff": 50`|
| `"coupon": "MJAMBGZ10","type": "FLAT","expDate":"2020-07-10","minAmount": 700,"amountOff": 50` |





