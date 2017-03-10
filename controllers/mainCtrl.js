const user = require('../user.js')

module.exports = {
  readName: (req, res) => {
    res.status(200).send({"name": user.name});
  },
  readLocation: (req, res) => {
    res.status(200).send({"location": user.location});
  },
  readListOccupations: (req, res) => {
    res.status(200).send({"occupations": user.occupations});
  },
  readLatestOccupation: (req, res) => {
    const latest = user.occupations[user.occupations.length-1]
    res.status(200).send({"latestOccupation": user.occupations});
  },
  readListHobbies: (req, res) => {
    res.status(200).send({"hobbies": user.hobbies});
  },
  readHobbyType: (req, res) => {
    const type = user.hobbies.filter((hobby) => {
      return hobby.type === req.params.type;
    })
    console.log(type);
    res.status(200).send({"Matching Hobbies": type});
  },
  readFamilyGender: (req, res) => {
    const member = user.family.filter((member) => {
      return member.gender === req.params.gender;
    })
    console.log(member);
    res.status(200).send({"Matching Family Members": member});
  },
  readListRestaurants: (req, res) => {
    res.status(200).send(user.restaurants)
  },
  readRestaurantName: (req, res) => {
    const restaurant = user.restaurants.filter((restaurant) => {
      console.log(req.params.name)
      return restaurant.name === req.params.name
    })
    res.status(200).send(restaurant);
  },
}
