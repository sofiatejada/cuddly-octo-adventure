require('dotenv').config();


const fakeRequest = require('supertest');
const app = require('../lib/app');


describe('app routes', () => {
  describe('routes', () => {

    test('returns city data', async() => {

      const expectation =
      {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624',
      };

      const data = await fakeRequest(app)
        .get('/location?search=seattle')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('returns weater data', async() => {

      const expectation = [
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) },
        { forecast: expect.any(String), time: expect.any(String) }
      ];

      const data = await fakeRequest(app)
        .get('/weather?latitude=37.130408&longitude=-121.6544974')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('returns businesses in the area data', async() => {

      const expectation = [
        {
          'name': 'Maurizio\'s',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/FGiySXDWBVn27t4ulz1Wjg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/maurizios-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Trail Dust BBQ',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ndJpRhKqmcG3qcTBCYQbXQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/trail-dust-bbq-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'My Pizza',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mEBK0LTaWwsU4sEVlJfFow/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/my-pizza-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'The Running Shop and Hops',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/Y6ucyK8bnKdf4JKeUzYc4A/o.jpg',
          'price': '$$',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/the-running-shop-and-hops-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Mr Falafel',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/h31GZ01T6hfJcAPcP-AtPA/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/mr-falafel-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Odeum Restaurant',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/unt7cobBAk_ngDgVS-o-bA/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/odeum-restaurant-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Jonty\'s Vietnamese Eatery',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Tnr4d98JQqqZUQTDwdrYzw/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/jontys-vietnamese-eatery-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Craft Roots',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/KSxNfvEICIjWCaScnGc9pg/o.jpg',
          'price': '$$',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/craft-roots-morgan-hill-2?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Siam Thai Restaurant',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/PLNvHcg8EYf_4CSitdBBVg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/siam-thai-restaurant-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Ladera Grill',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/WkwCFYCwpPoSgYpeX16I4A/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/ladera-grill-morgan-hill-2?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Noah\'s Bar & Bistro',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/TYLo9rtHXeP3azRsYMO7OA/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/noahs-bar-and-bistro-morgan-hill-3?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'A-Jay\'s Cheese Steaks - Morgan Hill',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/C5isMNh9Spa6lSDOqcM_fg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/a-jays-cheese-steaks-morgan-hill-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Simmering Pho Cafe',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/KeB07U58QfktKS76auLdig/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/simmering-pho-cafe-morgan-hill-2?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Prova California Table',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/E1OYsOzuhh8FZ63k1_Jtvw/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/prova-california-table-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'CreAsian',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/F60ABs41LLChBDEGu4jFKQ/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/creasian-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'La Nina Perdida',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/M07R8l7QTtmbhs92Ci4rbQ/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/la-nina-perdida-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Sicilia In Bocca',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ef7YY6Soc9ZLB_Mcw_u3Rw/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/sicilia-in-bocca-morgan-hill-2?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Yolked Extreme Breakfast',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/YVI7HlG6pjlqTVkCiqVqaQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/yolked-extreme-breakfast-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'Big Grill BBQ & Teriyaki',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5D2_Y9em9MidAZWAcoPy6Q/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/big-grill-bbq-and-teriyaki-morgan-hill?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        },
        {
          'name': 'I Do Wedding Cakes',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lKX9TpYlPEi0hyAZhNR6FQ/o.jpg',
          'price': '$$',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/i-do-wedding-cakes-morgan-hill-3?adjust_creative=9N4qQ7DERIKHI9lFQiFDIA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9N4qQ7DERIKHI9lFQiFDIA'
        }
      ];

      const data = await fakeRequest(app)
        .get('/reviews?latitude=37.130408&longitude=-121.6544974')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

  });
});
