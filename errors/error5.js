function thisSupposesToSetMyData (i) {
  return i
}
function thisAlsoSupposesToSet (i) {
  return i
}
function andThisShouldEnsureMyDataComplete (i) {
  return {
    my: {
      data: {
        should: {
        }
      }
    }
  }
}

const myInitialData = {}

const firstResult = thisSupposesToSetMyData(myInitialData)

const secondResult = thisAlsoSupposesToSet(firstResult)

const finalResult = andThisShouldEnsureMyDataComplete(secondResult)

console.log(finalResult.my.data.should.be.here)
