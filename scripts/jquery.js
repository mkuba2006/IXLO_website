$('#buttons').on('click', () => {
    const currentZIndex = $('#buttons').css('z-index');
    const newZIndex = currentZIndex === '10' ? '11' : '10';
    $('#buttons').fadeIn(100).css('z-index', newZIndex);
  });
  $('#buttons2').on('click', () => {
    const currentZIndex = $('#buttons').css('z-index');
    const newZIndex = currentZIndex === '10' ? '11' : '10';
    $('#buttons').fadeIn(100).css('z-index', newZIndex);
  });
  