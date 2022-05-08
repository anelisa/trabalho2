const blue = document.querySelector('#rangeBlue');
blue.addEventListener('input', seeRangeBlue);

const red = document.querySelector('#rangeRed');
red.addEventListener('input', seeRangeRed);

const green = document.querySelector('#rangeGreen');
green.addEventListener('input', seeRangeGreen);


function seeRangeGreen (event){

  const rangeGreen = event.target.value;
  const greenRange = document.querySelector('#disabledGreen')
  greenRange.value = rangeGreen;

  document.getElementById("container").style.backgroundColor = 'rgb(0,' + rangeGreen + ', 0)';

}

function seeRangeRed (event){

  const rangeRed = event.target.value;
  const redRange = document.querySelector('#disabledRed');
  redRange.value = rangeRed;

  document.getElementById("container").style.backgroundColor = 'rgb('+ rangeRed +', 0, 0)';
}

function seeRangeBlue (event){

  const rangeBlue = event.target.value;
  const blueRange = document.querySelector('#disabledBlue');
  blueRange.value = rangeBlue;
  document.getElementById("container").style.backgroundColor = 'rgb(0, 0,' + rangeBlue +')';
}


function teste () {
    var x = document.getElementById('rangeRed');
    var y = document.getElementById('rangeGreen');
    var z = document.getElementById('rangeBlue');

    document.getElementById("container").style.backgroundColor = 'rgb('+ x.value + ',' + y.value + ',' + z.value  +')';
}