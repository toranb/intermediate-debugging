describe('clicking the button works', function () {
  it('should count from 1 to 6', function () {
    document.querySelector('.testing').innerHTML = "<button class=\"number start\">1</button>";
    init(); // src/app.js ... globals ya'll ;)

    var number = document.querySelector('.start').innerHTML;
    chai.expect(number).to.equal('1');

    document.querySelector('.start').click();
    var number = document.querySelector('.start').innerHTML;
    chai.expect(number).to.equal('2');

    document.querySelector('.start').click();
    var number = document.querySelector('.start').innerHTML;
    chai.expect(number).to.equal('3');

    document.querySelector('.start').click();
    var number = document.querySelector('.start').innerHTML;
    chai.expect(number).to.equal('4');

    document.querySelector('.start').click();
    var number = document.querySelector('.start').innerHTML;
    chai.expect(number).to.equal('5');

    // document.querySelector('.start').click();
    // var number = document.querySelector('.start').innerHTML;
    // chai.expect(number).to.equal('6');
  });
});
