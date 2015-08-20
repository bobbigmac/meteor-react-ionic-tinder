if (MyData.find().count() === 0) {
  _.each(_.range(25), function() {
    MyData.insert({
      name: faker.name.findName(),
      image: faker.image.people(),
      details: faker.lorem.sentence()
    })
  })
}

Meteor.publish("myData", function() {
  return MyData.find()
})
