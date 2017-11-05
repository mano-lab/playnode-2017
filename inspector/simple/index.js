function thisSupposesToSetMyData (i) {
  return {
    my: {
      data: {
        should: {
        }
      }
    }
  }
}
function thisAlsoSupposesToSet (i) {
  i.my.data.should.be = {
    here: 'You live only once.'
  }
  return i
}
function andThisShouldEnsureMyDataComplete (i) {
  delete i.my.data.should.be.here
  return i
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const myInitialData = {}

const firstResult = thisSupposesToSetMyData(myInitialData)

const secondResult = thisAlsoSupposesToSet(firstResult)

const finalResult = andThisShouldEnsureMyDataComplete(secondResult)

console.log(finalResult.my.data.should.be.here)
