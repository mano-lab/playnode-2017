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
  return i.my.data.should.be = {
    here: 'You live only once.'
  }
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
